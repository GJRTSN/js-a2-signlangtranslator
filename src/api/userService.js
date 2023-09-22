import { apiHeaders } from "./config";

const baseUrl = "https://branch-amplified-hydrofoil.glitch.me/translations";

const requestData = async (url, options, errorMsg) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(errorMsg || response.statusText);
    }
    return [null, await response.json()];
  } catch (error) {
    return [error.message, null];
  }
};

// Create a new user
const createNewUser = async (username) => {
  return requestData(
    baseUrl,
    {
      method: "POST",
      headers: apiHeaders(),
      body: JSON.stringify({ username, translations: [] }),
    },
    "Unable to create new user."
  );
};

// Fetch an existing user
const findExistingUser = async (username) => {
  return requestData(
    `${baseUrl}?username=${username}`,
    null,
    "Unable to fetch user details."
  );
};

// Search for existing user or create new
export const loginUser = async (username) => {
  const [error, user] = await findExistingUser(username);
  if (error) return [error, null];
  return user.length ? [null, user.pop()] : createNewUser(username);
};

// Fetch a user by their ID.
export const findUserById = async (userId) => {
  return requestData(
    `${baseUrl}/${userId}`,
    null,
    `Unable to find user with ID: ${userId}.`
  );
};

// Update a users translations
export const updateTranslations = async (userId, newTranslation) => {
  try {
    // Get current data
    const [errorFetching, userData] = await findUserById(userId);
    if (errorFetching) {
      throw new Error(errorFetching);
    }

    // Append new translation to current list
    const updatedTranslations = [...userData.translations, newTranslation];

    // Send updated list back to API
    const response = await fetch(`${baseUrl}/${userId}`, {
      method: "PUT",
      headers: apiHeaders(),
      body: JSON.stringify({
        ...userData,
        translations: updatedTranslations,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to update translations");
    }

    return [null, await response.json()];
  } catch (error) {
    return [error.message, null];
  }
};

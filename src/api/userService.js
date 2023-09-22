import { apiHeaders } from "./config";

const baseUrl = "https://branch-amplified-hydrofoil.glitch.me/translations";

// General-purpose request function that takes custom error messages.
const requestData = async (url, options, errorMsg) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(errorMsg || response.statusText); // Use custom error message if provided.
    }
    return [null, await response.json()];
  } catch (error) {
    return [error.message, null];
  }
};

// Create a new user with custom error message.
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

// Fetch an existing user with custom error message.
const findExistingUser = async (username) => {
  return requestData(
    `${baseUrl}?username=${username}`,
    null,
    "Unable to fetch user details."
  );
};

// Manages user login. Will search for an existing user or create a new one if not found.
export const loginUser = async (username) => {
  const [error, user] = await findExistingUser(username);
  if (error) return [error, null];
  return user.length ? [null, user.pop()] : createNewUser(username);
};

// Fetch a user by their ID with custom error message.
export const findUserById = async (userId) => {
  return requestData(
    `${baseUrl}/${userId}`,
    null,
    `Unable to find user with ID: ${userId}.`
  );
};

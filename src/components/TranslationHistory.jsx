import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { clearUserTranslations } from "../api/userService";

function TranslationHistory() {
  const [recentTranslations, setRecentTranslations] = useState([]);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    getRecentTranslations();
  }, []);

  function getRecentTranslations() {
    fetch(`https://branch-amplified-hydrofoil.glitch.me/translations/${userId}`)
      .then((result) => {
        if (!result.ok)
          throw new Error(`${result.status} (${result.statusText})`);
        return result.json();
      })
      .then((userResult) => {
        const translations = userResult.translations || [];
        setRecentTranslations(translations.reverse().slice(0, 10));
      })
      .catch((error) => {
        console.error("Unable to fetch recent translations:", error);
      });
  }

  async function clearTranslations() {
    const [error] = await clearUserTranslations(userId);
    if (error) {
      console.error("Unable to clear translations:", error);
    } else {
      // Clear the translations from local state after API call
      setRecentTranslations([]);
    }
  }

  return (
    <div className="rounded-md h-full w-full mt-4 bg-slate-300">
      <div className="flex justify-between items-center m-4">
        <h3 className="text-xl text-gray-500 font-bold">
          Previous translations
        </h3>
        <button
          onClick={clearTranslations}
          className="text-sm px-2 py-1 rounded bg-red-500 hover:bg-red-700 text-white"
        >
          Clear all
        </button>
      </div>
      <div className="m-2 p-4 rounded-sm bg-white text-sm">
        <ul className="text-black">
          {recentTranslations.map((translation, index) => (
            <li key={index}>
              {index + 1}. {translation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TranslationHistory;

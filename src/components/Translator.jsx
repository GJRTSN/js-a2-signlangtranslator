import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateTranslations } from "../api/userService";
import TranslationResult from "./TranslationResult";
function Translator() {
  const [inputText, setInputText] = useState("");
  const [showTranslation, setShowTranslation] = useState(false)
  // Get userId from store
  const userId = useSelector((state) => state.user.userId);

  const handleSubmit = async () => {
    if (inputText.trim()) {
      // Call API function to update translations
      const [error] = await updateTranslations(userId, inputText);
      if (error) {
        console.error("Failed to update translations:", error);
        return;
      }
      setInputText("");
      setShowTranslation(true)
    }
  };

  function translate(text) {
    let images = []
    for (const letter of text) {
      console.log(letter)
      let imagePath = `./${letter}.png`
      images.push(imagePath)
    }
    return images
  }

  return (
    <div
      id="translatorContainer"
      className="rounded-md w-3/5 h-3/5 flex flex-col items-center bg-blue-500"
    >
      <div
        id="inputBox"
        className="drop-shadow-md flex rounded-md w-full h-3/5 items-center p-4 bg-indigo-500"
      >
        <h3 className="text-2xl font-bold mr-4">Start here!</h3>
        <input
          name="sentence"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write the sentence you want to translate"
          className="text-black flex-grow px-2 py-1 border rounded text-2xl"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 bg-indigo-700 px-4 rounded hover:bg-indigo-300"
        >
          Go
        </button>
      </div>

      <div
        id="resultBox"
        className=" mt-8 rounded-md w-full h-3/5 flex flex-col p-4 bg-blue-500"
      >
        <h3 className="text-2xl font-bold">Translation</h3>
        <div
          id="resultsContainer"
          className="bg-white rounded-md h-48 w-full mt-4 flex flex-row"
        >
          {showTranslation && (<TranslationResult translationImages={translate(inputText)}/>)}
        </div>
      </div>
    </div>
  )
}
  

export default Translator;

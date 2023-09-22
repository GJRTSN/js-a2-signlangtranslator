import React, { useEffect, useState } from "react";
import TranslationImage from "./TranslationImage";
import TranslationResult from "./TranslationResult";
function Translator() {

  const [input, setInput] = useState("")
  const [showTranslation, setShowTranslation] = useState(false)

  function translateButtonClickEvent() {
    setShowTranslation(true)
  }

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
          name="username"
          placeholder="Write the sentence you want to translate"
          className="text-black flex-grow px-2 py-1 border rounded text-2xl" // Added flex-grow
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-indigo-700 px-4 rounded hover:bg-indigo-300"
          onClick={translateButtonClickEvent}
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
          {showTranslation && (<TranslationResult translationImages={translate(input)}/>)}
        </div>
      </div>
    </div>
  )
}
  

export default Translator;

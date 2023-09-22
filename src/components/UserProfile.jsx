import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux" 
import { getTranslationsAsync, setTestUser, selectUser, getTestUser } from "../redux/userSlice"
import TranslationsList from "./TranslationsDisplayer"


function UserProfile() {
    const [recentTranslations, setRecentTranslations] = useState([])
    localStorage.setItem("currentUser", "dewaldels")
    const username = localStorage.getItem("currentUser")
    let id = 1

    useEffect(() => (getRecentTranslations()), [])


    function getRecentTranslations() {
      fetch(`https://branch-amplified-hydrofoil.glitch.me/translations/${id}`)
      .then(result => result.json())
      .then(userResult => userResult.translations)
      .then(translations => translations.reverse())
      .then(sortedByRecent => sortedByRecent.slice(0,10))
      .then(recent => setRecentTranslations(recent))
      }


    return (
        <div>
          {localStorage.getItem("currentUser") != null && (
            <h2>{username} is logged in</h2>
          )}
          {recentTranslations.length > 0 && (
            <TranslationsList recentTranslations = {recentTranslations}></TranslationsList>
          )}
        </div>
      );
}

export default UserProfile
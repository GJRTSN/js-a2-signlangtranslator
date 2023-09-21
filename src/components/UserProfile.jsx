import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux" 
import { getTranslationsAsync, setTestUser, selectUser, getTestUser } from "../redux/userSlice"
import TranslationsList from "./TranslationsDisplayer"


function UserProfile(props) {
    const [translations, setTranslations] = useState([])
    

    const dispatch = useDispatch()
    dispatch(getTestUser)
    localStorage.setItem("currentUser", username)
    let userData = useSelector((state) => state.user)
    useEffect(() => (getTranslations()), [])

    function getTranslations() {
        fetch("https://branch-amplified-hydrofoil.glitch.me/translations/1")
        .then(result => result.json())
        .then(userResult => setTranslations(userResult.translations))
        }


    return (
        <div>
          {localStorage.getItem("currentUser") != null && (
            <h2>{username} is logged in</h2>
          )}
          {translations.length > 0 && (
            <TranslationsList translations = {translations}></TranslationsList>
          )}
        </div>
      );
    
}

export default UserProfile
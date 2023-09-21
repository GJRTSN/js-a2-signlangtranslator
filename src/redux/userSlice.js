import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const urlId= 1

const apiBaseURL = "https://branch-amplified-hydrofoil.glitch.me/translations/"

export const getTestUser = createAsyncThunk(
    'user/testUser',
    () => {
        return fetch(`https://branch-amplified-hydrofoil.glitch.me/translations/${urlId}`)
        .then(response => response.json())
        .then(testUser => {return testUser})

    }
)

export const getTranslationsAsync = createAsyncThunk(
    'getUserTranslations',
    async () => {
        const resp = await fetch(`apiBaseURL${urlId}`)
        const user = resp.json()
        const translations = user.translations
        return translations
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        isLoggedIn: false
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload
            state.isLoggedIn = true
        },
        setTestUser: (state) => {
            state.username = "testuser"
            state.isLoggedIn = true
        }
    },
    extraReducers: {
        [getTestUser.fulfilled]: (state, action) => {
            // state.username = action.payload[0]
            return action.payload
        },
    }
})

export const {setUser} = userSlice.actions
export const userReducer = userSlice.reducer
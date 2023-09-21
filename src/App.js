import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import LoginPage from "./components/LoginPage";
import TranslatePage from "./components/TranslatePage";
import { initializeUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/translator" element={<TranslatePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

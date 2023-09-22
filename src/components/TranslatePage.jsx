import React from "react";
import AuthGuard from "./AuthGuard";
import { useSelector } from "react-redux";
import Translator from "./Translator";
import NavBar from "./NavBar";

function TranslatePage() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <NavBar />
      <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <p className="mb-8 text-4xl font-black">
          Welcome to the translator, {username}!
        </p>
        <Translator />
      </div>
    </div>
  );
}

export default AuthGuard(TranslatePage);

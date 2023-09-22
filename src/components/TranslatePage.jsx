import React from "react";
import AuthGuard from "./AuthGuard";
import { useSelector } from "react-redux";
import Translator from "./Translator";
import Logout from "./LogOut";

function TranslatePage() {
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.userId);

  return (
    <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
      <p className="mb-8 text-4xl font-black">
        Welcome to the translator, {username}! - your ID is = {userId}
      </p>
      <Logout />
      <div>{/* <Translator /> */}</div>
    </div>
  );
}

export default AuthGuard(TranslatePage);

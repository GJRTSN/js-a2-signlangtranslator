import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user state
    dispatch(logout());

    // Clear the username from local storage
    localStorage.removeItem("currentUser");

    // Navigate to login page
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-3/5"
    >
      Logout
    </button>
  );
}

export default Logout;

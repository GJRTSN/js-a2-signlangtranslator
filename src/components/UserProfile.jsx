import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function UserProfile() {
  const userId = useSelector((state) => state.user.userId);
  const username = useSelector((state) => state.user.username);

  return (
    <div
      id="resultBox"
      className=" rounded-xl h-3/5 flex flex-col bg-blue-500 w-full p-8 m-8"
    >
      <h2>Username: {username}</h2>
      <h2>User ID: {userId}</h2>
    </div>
  );
}

export default UserProfile;

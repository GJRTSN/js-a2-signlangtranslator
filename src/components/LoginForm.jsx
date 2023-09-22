import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { loginUser } from "../api/userService";

function LoginForm() {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      // If logged in, redirect to the translation page
      navigate("/translator");
    }
  }, []);

  const onSubmit = async (data) => {
    const [error, user] = await loginUser(data.username);

    if (error) {
      console.error("Unable to login:", error);
      console.log(data.username);
      return;
    }

    // Dispatch the login action to the Redux store
    dispatch(login(user));

    // Save username and id in local storage
    localStorage.setItem("currentUser", user.username);
    localStorage.setItem("currentUserId", user.id.toString());

    // Navigate to translator after login
    navigate("/translator");
  };

  return (
    // prettier-ignore
    <div
      id="loginBox"
      className="drop-shadow-2xl rounded-md w-1/5 h-3/5 flex flex-col items-center p-4 bg-indigo-500">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-2xl font-bold">Username</h3>
        <input 
          name="username"
          placeholder="Enter your name..."
          className="text-black w-3/4 mt-2 px-2 py-1 border rounded text-2xl"
          {...register("username", { required: true, minLength: 3 })} />
        {errors.username && (<p className="text-red-300 text-sm mt-4">
            Invalid username (must be at least 3 characters)
          </p>
        )}
        <button type="submit" className="w-1/2 mt-4 bg-indigo-700 px-4 py-2 rounded hover:bg-indigo-300">
          Start
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

import UserProfile from "./UserProfile";
import AuthGuard from "./AuthGuard";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import TranslationHistory from "./TranslationHistory";

function UserProfilePage() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <NavBar />
      <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <p className="mb-8 text-4xl font-black">{username}'s profile page</p>
        <div
          id="userProfileContainer"
          className="rounded-md w-3/5 h-3/5 flex flex-col items-center bg-[#654869] p-8"
        >
          <UserProfile />
          <TranslationHistory />
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;

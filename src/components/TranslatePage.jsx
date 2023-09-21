import AuthGuard from "./AuthGuard";
import { useSelector } from "react-redux";
import Translator from "./Translator";
import Logout from "./LogOut";

function TranslatePage() {
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <div className="text-center ">
        <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <p className="mb-8 text-4xl font-black">
            Welcome to the translator, {username}!
            <Logout />
          </p>
          <div>{/* <Translator></Translator> */}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthGuard(TranslatePage);

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./LogOut";

function NavBar() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="bg-[#3c4c6b] flex flex-row h-16 items-center justify-center gap-24">
      <NavLink to="/translator">
        <h1 className="text-white font-black text-3xl hover:text-slate-400">
          Lost in Translation
        </h1>
      </NavLink>

      <NavLink to="/profile">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded h-3/5">
          {username}
        </button>
      </NavLink>
      <Logout />
    </div>
  );
}

export default NavBar;

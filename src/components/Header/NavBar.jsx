import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink className="mx-0 lg:mx-5" to="/counselling">
        Free Counselling
      </NavLink>
      <NavLink to="/tutorials">Tutorials</NavLink>
    </>
  );

  const handleSignOut = () => logOut();

  return (
    <div className="navbar bg-purple-300 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <span>{user?.displayName}</span>
            <img
              className="ml-3 w-8 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button
              onClick={handleSignOut}
              className="ml-3 px-4 py-2 font-semibold bg-red-600 text-white hover:bg-red-500 drop-shadow-xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="px-4 py-2 font-semibold bg-green-700 text-white hover:bg-green-600 drop-shadow-lg">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="ml-3 px-4 py-2 font-semibold bg-red-600 text-white hover:bg-red-500 drop-shadow-xl">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

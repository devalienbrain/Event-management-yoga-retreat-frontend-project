import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const NavBar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink className="mx-5" to="/about">
        About
      </NavLink>
      <NavLink to="/career">Career</NavLink>
    </>
  );

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
        {user?.displayName}
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

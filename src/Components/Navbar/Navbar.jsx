import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { handleLogout, user } = useContext(authContext);


  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold  ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to=""
        >
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to=""
        >
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to=""
        >
          About us
        </NavLink>
      </li>
      {
        user && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
              }
              to=""
            >
              My Profile
            </NavLink>
          </li>
        )
      }
    </>
  );

  return (
    <>

      <div className="bg-base-100 shadow-md py-2">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <img className="w-16 h-16" src="" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="flex gap-3">
                <img
                  className="rounded-full w-12 h-12"
                  src={user?.photoURL || " "}
                  alt="User"
                />
                <button onClick={handleLogout} className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

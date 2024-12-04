import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo .jpg"
import { FiMoon, FiSun } from "react-icons/fi";
const Navbar = () => {
  const { handleLogout, user } = useContext(authContext);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
          to="/all-visas"
        >
          All visas
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to="/add-visa"
        >
          Add Visa
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to="/my-added-visas"
        >
          My added visas
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
          }
          to="/my-visa-applications"
        >
          My Visa applications
        </NavLink>
      </li>

      {
        user && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "bg-blue-800 text-white hover:text-black" : "hover:text-blue-600"}`
              }
              to="/my-profile"
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
            <img className="w-16 h-16" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="flex gap-3 items-center">
                <div className="relative group">
                  <img
                    className="rounded-full w-12 h-12 border-2 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    src={user?.photoURL || " "}
                    alt="User"
                  />
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-40 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out scale-75 group-hover:scale-100">
                    <p className="text-white text-center font-semibold animate-bounce">
                      {user?.displayName || "Hello, User!"}
                    </p>

                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-transform"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <NavLink to="/login">
                  <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-transform">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-transform">
                    Register
                  </button>
                </NavLink>

              </div>
            )}
          </div>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost rounded-full p-2 ml-3"
          >
            {theme === 'light' ? (
              <FiMoon className="text-2xl" />
            ) : (
              <FiSun className="text-2xl text-yellow-300" />
            )}
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;

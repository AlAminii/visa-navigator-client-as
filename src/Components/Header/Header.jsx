import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { users, logOut } = useContext(AuthContext);
  console.log("Header Users:", users);

  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/allvisa", label: "All Visas" },
    { path: "/addvisa", label: "Add Visa" },
    { path: "/myaddvisa", label: "My Added Visas" },
    { path: "/myvisaapplication", label: "My Visa Applications" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navlinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : ""
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Visa Navigator
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        {users ? (
          <>
        
            <div className="flex items-center gap-2">
              {users.photoURL && (
                <img
                  src={users.photoURL}
                  alt="profile"
                  className="w-8 h-8 rounded-full border"
                />
              )}
              <span>{users.displayName || users.email}</span>
            </div>
            <button onClick={logOut} className="btn btn-outline">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

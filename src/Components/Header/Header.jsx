import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tooltip } from "react-tooltip";


const Header = () => {
  const { users, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/login");
      setIsDropdownOpen(false);
    });
  };

  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/allvisa", label: "All Visas" },
    { path: "/addvisa", label: "Add Visa" },
    { path: "/myaddvisa", label: "My Added Visas" },
    { path: "/myvisaapplication", label: "My Visa Applications" },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-700">
      <div className="navbar container mx-auto px-4">
     
        <div className="navbar-start">
        
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-slate-200">
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
              className="menu menu-sm dropdown-content bg-slate-800 rounded-xl mt-3 w-52 p-2 shadow-xl border border-slate-700"
            >
              {navlinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      } rounded-lg transition-all`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 px-2">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Visa Navigator
            </span>
          </NavLink>
        </div>

      
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navlinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    } rounded-lg transition-all font-medium`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="navbar-end gap-3">
       
        

          {users ? (
            
            <div className="relative">
             
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                data-tooltip-id="user-profile"
                data-tooltip-content={users.displayName || users.email}
                className="relative"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500 hover:ring-4 transition-all cursor-pointer">
                  {users.photoURL ? (
                    <img
                      src={users.photoURL}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                      {users.email?.[0].toUpperCase()}
                    </div>
                  )}
                </div>
              </button>

             
              <Tooltip
                id="user-profile"
                place="bottom"
                style={{
                  backgroundColor: "#1e293b",
                  color: "#e2e8f0",
                  borderRadius: "8px",
                }}
              />

          
              {isDropdownOpen && (
                <>
               
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>

                 
                  <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-20 overflow-hidden">
                 
                    <div className="p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500">
                          {users.photoURL ? (
                            <img
                              src={users.photoURL}
                              alt="profile"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-lg font-bold">
                              {users.email?.[0].toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-200 font-semibold truncate">
                            {users.displayName || "User"}
                          </p>
                          <p className="text-slate-400 text-sm truncate">
                            {users.email}
                          </p>
                        </div>
                      </div>
                    </div>

                 
                    <div className="p-2">
                      <button
                        onClick={handleLogOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 rounded-lg transition-all group"
                      >
                        <span className="text-red-400 text-lg group-hover:scale-110 transition-transform">
                          🚪
                        </span>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
          
            <div className="flex gap-2">
              <NavLink to="/login">
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-600 transition-all">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg shadow-lg transition-all">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
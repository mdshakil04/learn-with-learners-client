import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logos/nav-logo.png";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allClasses">All Classes</NavLink>
      </li>
      <li>
        <NavLink to="/teachOn">Teach On</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/teacher">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    //
    <div className="navbar container rounded-xl  mx-auto lg:ml-40 shadow-2xl fixed z-10  bg-[#15495a] text-white mb-24 font-bold  ">
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
            {navLinks}
          </ul>
        </div>
        <div className="items-center  gap-2">
          <img className="w-2/3" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <label tabIndex={0} className=" mr-4">
          <div className="">{user && <p className=" text-2xl">{user.displayName}</p>}</div>
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-accent"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-accent">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

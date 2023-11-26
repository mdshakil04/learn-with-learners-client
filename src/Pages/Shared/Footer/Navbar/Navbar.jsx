import { NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logos/nav-logo.png";
import user from '../../../../assets/images/logos/comment_1.png'

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allClasses">All Classes</NavLink>
      </li>
      <li>
        <NavLink to="/addTeacher">Teach On</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-[#176b87] text-white mb-24 font-bold  ">
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
        {/* <label tabIndex={0} className="">
              <div className=" ">{user && <p>{user.email}</p>}</div>
            </label> */}
        {/* {user ? (
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            )} */}
        <div className=" mx-4">
          <details className="dropdown dropdown-end">
            <summary className="">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user} />
                </div>
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#176B87]  rounded-box ">
              <li>
                <a>Shakil</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <button className="btn btn-outline btn-error">Logout</button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

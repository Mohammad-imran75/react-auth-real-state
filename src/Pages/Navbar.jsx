import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/update'>Update Propile</NavLink></li>
    <li><NavLink to='/user'>User Propile</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    
    </>
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                navLinks
            }
          </ul>
        </div>
        <div className="flex items-center gap-0">
            <img className="w-[120px]" src="https://i.ibb.co/0V995tL/7697984.jpg" alt="" />
        <a className="btn btn-ghost text-2xl">Flavor Haven</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
            navLinks
         }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

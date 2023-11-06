import { Link, NavLink } from "react-router-dom";
import { BsFire } from "react-icons/bs";

const MainLayout = ({ children }) => {
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddJob"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/postedJobs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bidRequests"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar justify-between">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-slate-500"
            >
              <svg
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" logo">
            <BsFire className="text-3xl"></BsFire>
            <h1 className="font-bold text-3xl">FlameFrelance</h1>
          </div>
          <div className=" hidden lg:block">
            <ul className="menu-horizontal gap-5 text-[#fff]">
              {/* Navbar menu content here */}
              {navList}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link className="bg-white bg-opacity-10 text-white py-2 px-6 font-semibold" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-white bg-[#0b1126]">
          {/* Sidebar content here */}
          {navList}
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;

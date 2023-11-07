import { Link, NavLink } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import useAuthContext from "../../hooks/useAuthContext";

const MainLayout = ({ children }) => {
  const { user, logOutUser } = useAuthContext();
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
          to={`postedJobs`}
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

  const handleLogOut = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {user && user?.email ? (
            <div className="dropdown hidden md:block">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL ? user?.photoURL : avater} alt="" />
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content w-60 mt-2 z-[3] -ml-48 border rounded p-6 shadow text-neutral-content bg-black"
              >
                <div>
                  <img
                    className="rounded-full w-16 h-16 mx-auto"
                    src={user?.photoURL ? user?.photoURL : ""}
                    alt=""
                  />
                  <h1 className="text-white text-xl text-center pt-2 pb-6">
                    {user?.displayName}
                  </h1>
                  <Link
                    onClick={handleLogOut}
                    className="flex items-center gap-1"
                    to={"/"}
                  >
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <NavLink
                className={
                  "py-2 px-4 text-white font-bold bg-slate-200 bg-opacity-20"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </div>
          )}
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
          {user?.email && (
            <div>
              <img
                className="rounded-full w-16 h-16 mx-auto"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/xjqfNwn/6596121.png"
                }
                alt=""
              />
              <h1 className="text-white text-xl text-center pt-2 pb-6">
                {user?.displayName}
              </h1>
            </div>
          )}
          {/* Sidebar content here */}
          {navList}
          <li>
            {user?.email && (
              <Link
                onClick={handleLogOut}
                className="flex items-center gap-1"
                to={"/"}
              >
                <span>Logout</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;

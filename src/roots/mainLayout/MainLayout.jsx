import { Link, NavLink } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import useAuthContext from "../../hooks/useAuthContext";

const MainLayout = () => {
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
          to="/myBids"
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
    <div className="drawer items-center z-[3] max-w-screen-2xl mx-auto">
      <div className="drawer-content flex flex-col">
        <div className="lg:px-16 navbar items-center justify-between">
          <Link to={"/"}>
            <div className="logo flex items-center">
              <BsFire className="text-3xl text-slate-300"></BsFire>
              <h1 className="font-bold text-3xl">FlameFrelance</h1>
            </div>
          </Link>
          <div className=" hidden lg:block">
            <ul className="menu-horizontal gap-5 text-[#fff]">{navList}</ul>
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
            <div className="hidden md:block">
              <Link
                className={
                  "py-2 px-4 text-white font-bold bg-slate-200 bg-opacity-20"
                }
                to={"/login"}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="drawer md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
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
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="p-4 w-80 min-h-full bg-[#1D1D1D] bg-opacity-10 backdrop-blur-md text-white font-semibold">
            <img
              className="rounded-full w-16 h-16 mx-auto"
              src={user?.photoURL ? user?.photoURL : ""}
              alt=""
            />
            <h1 className="text-white text-xl text-center pt-2 pb-6">
              {user?.displayName}
            </h1>
            <ul className="menu menu-md">
              {navList}
              <li>
                <Link onClick={handleLogOut} to={"/"}>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

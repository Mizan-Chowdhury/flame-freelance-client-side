import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import AddJobs from "../../pages/addJobs/AddJobs";
import MyPostedJobs from "../../pages/myPostedJobs/MyPostedJobs";
import MyBids from "../../pages/myBids/MyBids";
import BidRequests from "../../pages/bidRequests/BidRequests";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Root from "../../roots/root/Root";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/addJob',
        element: <AddJobs></AddJobs>
      },
      {
        path: '/postedJobs',
        element: <MyPostedJobs></MyPostedJobs>
      },
      {
        path: '/bids',
        element: <MyBids></MyBids>
      },
      {
        path: '/bidRequests',
        element: <BidRequests></BidRequests>
      }
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default MyRouter;
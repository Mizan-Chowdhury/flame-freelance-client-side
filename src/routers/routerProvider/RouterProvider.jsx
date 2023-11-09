import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import AddJobs from "../../pages/addJobs/AddJobs";
import MyPostedJobs from "../../pages/myPostedJobs/MyPostedJobs";
import MyBids from "../../pages/myBids/MyBids";
import BidRequests from "../../pages/bidRequests/BidRequests";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Root from "../../roots/root/Root";
import JobDetails from "../../components/category/JobDetails";
import PrivateRouter from "../privateRouter/PrivateRouter";
import UpdateMyPostedJob from "../../pages/myPostedJobs/UpdateMyPostedJob";
import Error from "../../components/error404/Error";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJobs></AddJobs>
          </PrivateRouter>
        ),
      },
      {
        path: `/postedJobs`,
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: `/updatePostedJob/:id`,
        element: <UpdateMyPostedJob></UpdateMyPostedJob>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/updatePostedJobs/${params.id}`
          ),
      },
      {
        path: "/myBids",
        element: (
          <PrivateRouter>
            <MyBids></MyBids>
          </PrivateRouter>
        ),
      },
      {
        path: "/bidRequests",
        element: (
          <PrivateRouter>
            <BidRequests></BidRequests>
          </PrivateRouter>
        ),
      },
      {
        path: `/jobDetails/:id`,
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/jobDetails/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MyRouter;

/* eslint-disable react-hooks/rules-of-hooks */
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const { user } = useAuthContext();

  const [bidReqData, setBidReqData] = useState(null);
  const [status, setStatus] = useState("");
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(
        `/biddedJob?sortField=status&status=${status}&email=${user?.email}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setBidReqData(res?.data);
      });
  }, [axios, user.email, status]);

  const handleStatus = (id, status) => {
    axios.patch(`/postedJobs/${id}`, { status }).then((res) => {
      console.log(res);
      if (res?.data) {
        const remaining = bidReqData.filter((data) => data._id !== id);
        const updated = bidReqData.find((data) => data._id === id);
        updated.status = status;
        const newBidReq = [updated, ...remaining];
        setBidReqData(newBidReq);
      }
    });
  };

  return (
    <div className="py-10 px-4 md:px-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flame Frelance | My Bids</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:flex justify-between">
        <h1 className="text-3xl font-bold banner-title">Your Bidder Jobs</h1>
        <select
          className="select select-bordered w-full max-w-xs my-5"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option disabled selected>
            Sort by status
          </option>
          <option value={"asc"}>Completed</option>
          <option value={""}>Normal</option>
        </select>
      </div>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:hidden">
        {bidReqData?.map((bidJobs) => (
          <div key={bidJobs._id}>
            <div>
              <div className="card bg-[#0b1126] shadow-xl md:h-60">
                <div className="card-body">
                  <h2 className="card-title">{bidJobs.title}</h2>
                  <div className="">
                    <p>Your Email: {bidJobs.userEmail}</p>
                    <p>Deadline: {bidJobs.deadline}</p>
                  </div>
                  <div className="card-actions items-center">
                    <p>Status: {bidJobs.status}</p>
                    {bidJobs.status === "Progress" && (
                      <button
                        onClick={() => handleStatus(bidJobs._id, 'Complete')}
                        className="btn btn-sm"
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto px-10 hidden md:block">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white text-xl">
            <tr>
              <th>Job title</th>
              <th>Your email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bidReqData?.map((bidRequests) => (
              <tr key={bidRequests._id}>
                <td>{bidRequests.title}</td>
                <td>{bidRequests.userEmail}</td>
                <td>{bidRequests.deadline}</td>
                <td>{bidRequests.status}</td>
                {bidRequests.status === "Progress" && (
                  <div>
                    <th>
                      <button
                        onClick={() => handleStatus(bidRequests._id, 'Complete')}
                        className="btn btn-xs"
                      >
                        Complete
                      </button>
                    </th>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;

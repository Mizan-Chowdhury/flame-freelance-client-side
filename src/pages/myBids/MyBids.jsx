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
    <div className="py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flame Frelance | My Bids</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:flex justify-between">
        <h1 className="text-3xl font-bold banner-title">Your Bidder Jobs</h1>
        <select
          className="select select-bordered w-full max-w-xs my-5 text-black font-semibold"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option disabled selected>
            Sort by status
          </option>
          <option value={"asc"}>Completed</option>
          <option value={""}>Normal</option>
        </select>
      </div>

      <div className="overflow-x-auto ">
        <table className="table">
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
                  <th>
                    <button
                      onClick={() => handleStatus(bidRequests._id, "Complete")}
                      className="btn btn-xs"
                    >
                      Complete
                    </button>
                  </th>
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

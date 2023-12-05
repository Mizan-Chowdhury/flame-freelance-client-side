import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import BidRequestsCard from "./BidRequestsCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BidRequests = () => {
  const { user } = useAuthContext();
  const [bidReqData, setBidReqData] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`/biddJobRequests/${user?.email}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setBidReqData(res.data);
      });
  }, [axios, user.email]);

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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flame Frelance | Bid Requests</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-20 md:hidden">
        {bidReqData?.map((bidRequests) => (
          <div key={bidRequests._id}>
            <BidRequestsCard
              handleStatus={handleStatus}
              bidRequests={bidRequests}
            ></BidRequestsCard>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto px-10 hidden md:block">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white text-xl">
            <tr>
              <th>Job title</th>
              <th>Email</th>
              <th>Bidding price</th>
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
                <td>$ {bidRequests.bidding_price}</td>
                <td>{bidRequests.deadline}</td>
                <td>{bidRequests.status}</td>
                {bidRequests.status === "Pending" && (
                  <div>
                    <th>
                      <button
                        onClick={() =>
                          handleStatus(bidRequests._id, "Progress")
                        }
                        className="btn btn-xs"
                      >
                        Accept
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() =>
                          handleStatus(bidRequests._id, "Rejected")
                        }
                        className="btn btn-xs"
                      >
                        Reject
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

{
  /* <BidRequestsCard
handleStatus={handleStatus}
BidRequests={BidRequests}
></BidRequestsCard> */
}

export default BidRequests;

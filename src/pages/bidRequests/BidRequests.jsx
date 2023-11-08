import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import BidRequestsCard from "./BidRequestsCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BidRequests = () => {
  const { user } = useAuthContext();
  const [bidReqData, setBidReqData] = useState([]);
  const axios = useAxios();

  useEffect(()=>{
    axios.get(`/biddJobRequests/${user?.email}`).then((res) => {
        console.log(res.data);
        setBidReqData(res.data);
      });
  },[axios,user.email])

  const handleStatus = (id, status) => {
    axios.patch(`/postedJobs/${id}`, { status }).then((res) => {
      console.log(res);
      if(res?.data){
        const remaining = bidReqData.filter(data=> data._id !== id)
        const updated = bidReqData.find(data=> data._id === id)
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-20">
        {bidReqData?.map((BidRequests) => (
          <div key={BidRequests._id}>
            <BidRequestsCard
              handleStatus={handleStatus}
              BidRequests={BidRequests}
            ></BidRequestsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidRequests;

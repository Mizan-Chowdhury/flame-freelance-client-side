import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import MyBidsTable from "./MyBidsTable";
import { useEffect, useState } from "react";

const MyBids = () => {
  const { user } = useAuthContext();
  const [bidReqData, setBidReqData] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/biddedJob/${user?.email}`)
    .then(res=>{
      console.log(res)
      setBidReqData(res?.data);
    })
  }, [axios, user.email]);

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
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold banner-title mb-10">
        Your Bidder Jobs
      </h1>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-20">
        {bidReqData?.map((bidJobs) => (
          <div key={bidJobs._id}>
            <MyBidsTable
              handleStatus={handleStatus}
              bidJobs={bidJobs}
            ></MyBidsTable>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBids;

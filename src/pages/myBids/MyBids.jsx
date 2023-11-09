import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import MyBidsTable from "./MyBidsTable";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const { user } = useAuthContext();
  // const [bidReqData, setBidReqData] = useState([]);
  const [status, setStatus] = useState("");
  const axios = useAxios();

  // useEffect(() => {

  //   .then(res=>{
  //     console.log(res)
  //     setBidReqData(res?.data);
  //   })
  // }, [axios, user.email, status]);

  const getBiddedJob = async () => {
    const res = await axios.get(
      `/biddedJob?sortField=status&status=${status}&email=${user?.email}`,
      { withCredentials: true }
    );
    return res;
  };

  const {
    data: bidReqData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["biddedJob", status],
    queryFn: getBiddedJob,
  });

  if (isLoading) {
    return <p>loading.......</p>;
  }

  if (isError) {
    return <p>eror.</p>;
  }

  const handleStatus = (id, status) => {
    axios.patch(`/postedJobs/${id}`, { status }).then((res) => {
      // console.log(res);
      // if(res?.data){
      //   const remaining = bidReqData.filter(data=> data._id !== id)
      //   const updated = bidReqData.find(data=> data._id === id)
      //   updated.status = status;
      //   const newBidReq = [updated, ...remaining];
      //   // setBidReqData(newBidReq);
      // }
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
        <h1 className="text-3xl font-bold banner-title">
          Your Bidder Jobs
        </h1>
        <select className="select select-bordered w-full max-w-xs my-5" 
        onChange={(e)=>setStatus(e.target.value)}
        >
          <option disabled selected>
            Sort by status
          </option>
          <option value={'asc'}>Asn</option>
          <option value={''}>Normal</option>
        </select>
      </div>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bidReqData?.data.map((bidJobs) => (
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

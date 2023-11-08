import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import MyBidsTable from "./MyBidsTable";

const MyBids = () => {
  const { user } = useAuthContext();

  const axios = useAxios();

  const { data } = useQuery({
    queryKey: ["myBids"],
    queryFn: () => {
      return axios.get(`/biddedJob/${user?.email}`);
    },
  });
  console.log(data?.data);

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold banner-title mb-10">Your Bidder Jobs</h1>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-20">
        {data?.data.map((bidJobs) => (
          <div key={bidJobs._id}>
            <MyBidsTable bidJobs={bidJobs}></MyBidsTable>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBids;

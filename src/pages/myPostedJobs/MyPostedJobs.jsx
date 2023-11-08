import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";
import toast from "react-hot-toast";

const MyPostedJobs = () => {
  const { user } = useAuthContext();
  const email = user?.email;

  const axios = useAxios();
  const queryClient = useQueryClient();

  const getPostedJobs = async () => {
    const res = await axios.get(`/postedJobs/${email}`);
    return res;
  };

  const { data } = useQuery({
    queryKey: ["postedJobs"],
    queryFn: getPostedJobs,
  });
  console.log(data?.data);

  const { mutate } = useMutation({
    mutationKey: ["postedJobs"],
    mutationFn : (id) => {
      return axios.delete(`/postedJobs/${id}`)
    },
    onSuccess : () => {
      toast.success("Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ['postedJobs']
      });
    },
  });

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-32 my-20">
      {data?.data.map((postedJob) => (
        <div className="" key={postedJob._id}>
          <MyPostedJobsCard
            mutate={mutate}
            postedJob={postedJob}
          ></MyPostedJobsCard>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJobs;

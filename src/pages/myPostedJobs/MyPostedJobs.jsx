import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";

const MyPostedJobs = () => {
 
    const {user} = useAuthContext();
    const email = user?.email




    const axios = useAxios();

    const getPostedJobs = async () =>{
        const res = await axios.get(`/postedJobs/${email}`)
        return res;
    }

    const {data} = useQuery({
        queryKey: ['postedJobs'],
        queryFn: getPostedJobs
    })
    console.log(data?.data);



    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-32 my-20">
            {
                data?.data.map(postedJob => <div className="" key={postedJob._id}>
                    <MyPostedJobsCard  postedJob={postedJob}></MyPostedJobsCard>
                </div>)
            }
        </div>
    );
};

export default MyPostedJobs;
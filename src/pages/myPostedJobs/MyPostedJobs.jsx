import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyPostedJobs = () => {
  const { user } = useAuthContext();
  const [postedJob, setPostedJob] = useState([]);
  const email = user?.email;

  const axios = useAxios();

  useEffect(()=>{
    axios.get(`/postedJobs/${email}`, {withCredentials:true})
    .then(res=>{
      console.log(res)
      setPostedJob(res?.data);
    })
  },[axios, email])

  // const getPostedJobs = async () => {
  //   const res = await axios.get(`/postedJobs/${email}`);
  //   return res;
  // };

  // const { data } = useQuery({
  //   queryKey: ["postedJobs"],
  //   queryFn: getPostedJobs,
  // });
  // console.log(data?.data);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`/deleted/${id}`)
        .then(res=>{
          console.log(res)
          if(res?.data){
            toast.success("Successfully deleted");
            const remaining = postedJob?.filter(job=> job._id !== id)
            setPostedJob(remaining);
          }
          
        })
        // const { mutate } = useMutation({
        //   mutationKey: ["postedJobs"],
        //   mutationFn: (id) => {
        //     return axios.delete(`/addJob/${id}`);
        //   },
        //   onSuccess: () => {
        //     toast.success("Successfully deleted");
        //     queryClient.invalidateQueries({
        //       queryKey: ["postedJobs"],
        //     });
        //   },
        // });
      }
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-32 my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flame Frelance | My Posted Job</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {postedJob?.map((postedJob) => (
        <div className="" key={postedJob._id}>
          <MyPostedJobsCard
            // mutate={mutate}
            handleDelete={handleDelete}
            postedJob={postedJob}
          ></MyPostedJobsCard>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJobs;

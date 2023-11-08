import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const JobDetails = () => {
  const navigate = useNavigate()
  const job = useLoaderData();
  const {
    email,
    userRoll,
    title,
    deadline,
    max_price,
    min_price,
    description,
  } = job;

  const { user } = useAuthContext();
  const axios = useAxios();

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const biddedJob = {
      title,
      status: 'pending',
      bidding_price: form.biddingPrice.value,
      deadline: form.deadline.value,
      employerEmail: form.employerEmail.value,
      userEmail: form.userEmail.value,
      userRoll: "user",
    };

    axios.post("/biddedJob", biddedJob).then((res) => {
      console.log(res);
      toast.success("Successfully added!");
      form.reset();
      navigate('/myBids')
    });
  };

  return (
    <div className="min-h-screen py-16 px-2 lg:px-32">
      <div className="bg-[#0b1126] shadow-2xl rounded-lg p-8">
        <div>
          <div className="space-y-2 md:flex items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl mb-2">{title}</h1>
              <p className="border-b border-dotted pb-5 leading-5">
                {description}
              </p>
            </div>
            <div className="py-2 flex-1">
              <h1>
                Deadline : <span className="text-[#24ffe5]">{deadline}</span>
              </h1>
              <h1>
                {" "}
                Price range :{" "}
                <span className="text-[#24ffe5]">
                  ${min_price} - ${max_price}
                </span>
              </h1>
            </div>
          </div>
          <h1 className="text-2xl mt-20">Bid the Job</h1>
          <form onSubmit={handleJobSubmit}>
            <div className="form-control my-8">
              <label className="pb-2">
                <span className=" text-white">Your bidding price :</span>
              </label>
              <input
                name="biddingPrice"
                type="text"
                placeholder="Price"
                className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
            <div className="form-control my-8">
              <label className="pb-2">
                <span className=" text-white">Your deadline :</span>
              </label>
              <input
                name="deadline"
                type="date"
                className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
            <div className="my-8 flex gap-10">
              <div className="form-control w-full">
                <label className="pb-3">
                  <span className=" text-white">Your email :</span>
                </label>
                <input
                  readOnly
                  defaultValue={user?.email}
                  name="userEmail"
                  type="text"
                  className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="pb-3">
                  <span className=" text-white">Job owner email :</span>
                </label>
                <input
                  readOnly
                  defaultValue={email}
                  name="employerEmail"
                  type="text"
                  className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                  required
                />
              </div>
            </div>
            <input
              className={`btn border-none px-10 text-[#ffff] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${user && userRoll === "employer" ? "btn-disabled" : ''}`}
              type="submit"
              value="Place your bid"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

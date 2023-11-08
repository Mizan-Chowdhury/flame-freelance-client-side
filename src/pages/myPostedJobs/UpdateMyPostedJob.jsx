import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateMyPostedJob = () => {
  const axios = useAxios();
  const postedJob = useLoaderData();
  const navigate = useNavigate();


  const {
    _id,
    email,
    title,
    deadline,
    category,
    max_price,
    min_price,
    description,
  } = postedJob;

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      email: form.email.value,
      title: form.title.value,
      deadline: form.deadline.value,
      category: form.category.value,
      min_price: form.min_price.value,
      max_price: form.max_price.value,
      description: form.description.value,
    };
    console.log(updatedData, _id);

    axios.put(`/updatePostedJobs/${_id}`, updatedData).then((res) => {
      console.log(res);
      toast.success("succesfully updated!");
      navigate('/postedJobs')
    });
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-[#0b1126] md:w-8/12 mx-auto p-4 rounded-lg">
        <h1 className="text-3xl">Update Job</h1>
        <form onSubmit={handleUpdateForm} className="">
          <div className="form-control my-8">
            <input
              readOnly
              defaultValue={email}
              name="email"
              type="email"
              className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
              required
            />
          </div>
          <div className="form-control my-8">
            <input
              name="title"
              type="text"
              defaultValue={title}
              className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
              required
            />
          </div>
          <div className="form-control my-8">
            <input
              defaultValue={deadline}
              name="deadline"
              type="date"
              className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
              required
            />
          </div>
          <div>
            <select
              defaultValue={category}
              name="category"
              className="bg-transparent focus:outline-none border-b-2 pb-2 border-slate-400 border-opacity-40 w-full text-white"
            >
              <option className="bg-[#0b1126]" selected>
                Web development
              </option>
              <option className="bg-[#0b1126]">Digital marketing</option>
              <option className="bg-[#0b1126]">Graphics design</option>
            </select>
          </div>
          <div className="my-8 flex gap-10">
            <div className="w-full">
              <input
                name="min_price"
                type="text"
                defaultValue={min_price}
                className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
            <div className="w-full">
              <input
                name="max_price"
                type="text"
                defaultValue={max_price}
                className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
          </div>
          <div className="my-8">
            <textarea
              className="bg-transparent focus:outline-none border-b-2 pb-2 border-slate-400 border-opacity-40 w-full text-white"
              defaultValue={description}
              required
              name="description"
              id=""
              rows="5"
            ></textarea>
          </div>
          <div className="mt-4 flex item-center gap-10">
            <input
              className="btn text-white border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyPostedJob;

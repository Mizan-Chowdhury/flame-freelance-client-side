import toast, { Toaster } from 'react-hot-toast';
import useAxios from "../../hooks/useAxios";
import useAuthContext from '../../hooks/useAuthContext';



const AddJobs = () => {
  const {user} = useAuthContext();
  const axios = useAxios();
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newJob = {
      email: form.email.value,
      userRoll: "employer",
      title: form.title.value,
      deadline: form.deadline.value,
      category: form.category.value,
      min_price: form.min_price.value,
      max_price: form.max_price.value,
      description: form.description.value,
    };
    console.log(newJob);

    // fetch('http://localhost:5000/addJob', {
    //   method: 'POST',
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newJob)
    // })
    // .then(res=> res.json())
    // .then(data=> {
    //   console.log(data);
    // })

    axios.post("/addJob", newJob).then((res) => {
      console.log(res);
      toast.success('Successfully added!')
      form.reset();
    });
  };
  return (
    <div className="min-h-screen py-16">
      <div className="md:grid grid-cols-12 px-2 lg:px-32">
        <div className="col-span-4"></div>
        <div className="bg-[#0b1126] col-span-8 p-4 rounded-lg">
          <p>Add New Job</p>
          <h1 className="text-3xl">Create Job</h1>
          <form onSubmit={handleJobSubmit} className="">
            <div className="form-control my-8">
              <input
                readOnly
                defaultValue={user?.email}
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
                placeholder="Job title"
                className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
            <div className="form-control my-8">
              <input
                name="deadline"
                type="date"
                className=" bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                required
              />
            </div>
            <div>
              <select
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
                  placeholder="Minimum Price"
                  className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  name="max_price"
                  type="text"
                  placeholder="Maximum Price"
                  className="w-full bg-transparent focus:outline-none border-b-2 border-slate-400 border-opacity-40 pb-1 text-white"
                  required
                />
              </div>
            </div>
            <div className="my-8">
              <textarea
                className="bg-transparent focus:outline-none border-b-2 pb-2 border-slate-400 border-opacity-40 w-full text-white"
                placeholder="Description"
                required
                name="description"
                id=""
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="btn border-none px-10 text-[#ffff] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Add job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;

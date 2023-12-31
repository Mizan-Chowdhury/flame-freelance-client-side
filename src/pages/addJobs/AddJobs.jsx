import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosSend } from "react-icons/io";
import { FaPhone, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const AddJobs = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
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

    axios.post("/addJob", newJob).then((res) => {
      console.log(res);
      toast.success("Successfully added!");
      form.reset();
      navigate("/postedJobs");
    });
  };
  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flame Frelance | Add job</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:grid grid-cols-12 gap-5 px-2 lg:px-32">
        <div className="col-span-4 mb-10 md:mb-0">
          <div className="bg-[#0b1126] rounded-lg">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/jRyvRHW/Mizan-Chowdhury-1.png"
              alt=""
            />
            <div className="text-center p-4">
              <h1 className="text-3xl">Mizan Chowdhury</h1>
              <p>MERN Stack Developer</p>
              <p className="text-sm text-slate-400 mt-3">
                I am a motivated and dedicated MERN Stack Developer with
                knowledge both front-end and back-end. Looking for a
                professional role to start my career as a Web Developer where I
                will be able to share my acquired knowledge and gain more.
              </p>
              <div className="col-span-1 mt-4">
                <h1 className="text-2xl font-semibold">
                  Contact <span className="text-[#7063F2]">Me!</span>
                </h1>
                <div className="flex items-center gap-1">
                  <IoIosSend className="text-2xl text-[#7063F2]" />
                  <p>mizanchowdhury.519@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-[#7063F2]" />
                  <p>+880 17750 36519</p>
                </div>
                <div className="flex justify-center mt-2 gap-4 icons">
                  <a
                    href="https://www.facebook.com/Mizan1034"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-3xl hover:-mt-1 hover:text-[#7063F2] transition" />
                  </a>
                  <a
                    href="https://github.com/Mizan-Chowdhury"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl hover:-mt-1 hover:text-[#7063F2] transition" />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl hover:-mt-1 hover:text-[#7063F2] transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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

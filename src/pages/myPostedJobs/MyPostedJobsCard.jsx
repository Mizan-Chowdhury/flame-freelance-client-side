import { Link } from "react-router-dom";

const MyPostedJobsCard = ({ postedJob }) => {
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



 const handleUpdateForm = (e) =>{
    e.preventDefault();
    const form = e.target;

    const newJob = {
      email: form.email.value,
      title: form.title.value,
      deadline: form.deadline.value,
      category: form.category.value,
      min_price: form.min_price.value,
      max_price: form.max_price.value,
      description: form.description.value,
    };
    console.log(newJob);
 }






  return (
    <div className="bg-[#0b1126] p-8 rounded-lg shadow-sm space-y-2">
      <h1 className="text-xl">{title}</h1>
      <p className="border-b border-dotted pb-5 leading-5">
        {description.length > 100 ? description.slice(0, 90) : description} ...
      </p>
      <div className="py-2">
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
      <div className="flex justify-between">
        <button
          className="btn-sm btn border-none text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Update
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="bg-[#0b1126] modal-box w-11/12 max-w-5xl p-4 rounded-lg">
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
                  rows="3"
                ></textarea>
              </div>
              <div className="mt-4">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button onSubmit={handleUpdateForm} className="btn text-white border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Update</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>

        <button className="btn-sm btn border-none text-white bg-red-800">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyPostedJobsCard;

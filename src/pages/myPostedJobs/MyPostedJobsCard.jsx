import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const MyPostedJobsCard = ({ postedJob }) => {
  const axios = useAxios();
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

  const handleDeleteJob = (id) =>{
    console.log(id);
    axios.delete(`/deletePostedJob/${id}`)
    .then()
  }

  return (
    <div className="bg-[#0b1126] p-8 rounded-lg shadow-sm space-y-2">
      <h1 className="text-2xl">{title}</h1>
      <p className="border-b border-dotted pb-5 leading-5">{description}</p>
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
        <Link to={`/updatePostedJob/${_id}`}>
          <button
            className="btn-sm btn border-none text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Update
          </button>
        </Link>
        <button onClick={()=>handleDeleteJob(_id)} className="btn-sm btn border-none text-white bg-red-800">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyPostedJobsCard;

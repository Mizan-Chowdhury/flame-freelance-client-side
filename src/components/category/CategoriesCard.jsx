import { Link } from "react-router-dom";

const CategoriesCard = ({ job }) => {
  const { _id, title, deadline, category, max_price, min_price, description } =
    job;

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
      <div>
        <Link to={`/jobDetails/${_id}`}>
          <button
            className="btn-sm btn border-none text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Bid now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;

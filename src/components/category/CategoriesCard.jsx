import { Link } from "react-router-dom";

const CategoriesCard = ({ job }) => {
  const { _id, title, deadline, category, max_price, min_price, description } =
    job;

  return (
    <div className="bg-[#0b1126] p-5 rounded-lg shadow-sm flex flex-col">
      <div className="">
        <h1 className="text-xl mb-4">{title}</h1>
        <div className="border-b border-dotted pb-5 flex-grow">
          {description.length > 100 ? (
            <p>{description.slice(0, 90)}...</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="mt-2">
          <div className="flex justify-between font-bold">
            <h1>Deadline :</h1>
            <h1 className="text-[#24ffe5]">{deadline}</h1>
          </div>
          <div className="flex justify-between">
            <h1>Price range :</h1>
            <h1 className="text-[#24ffe5]">
              ${min_price} - ${max_price}
            </h1>
          </div>
          <div className="mt-4">
            <Link to={`/jobDetails/${_id}`}>
              <button className="btn-sm btn border-none text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
                Bid now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;

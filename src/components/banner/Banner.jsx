import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:px-16 flex items-center min-h-screen py-20 md:py-0">
      <div className="flex items-center flex-col lg:flex-row-reverse justify-between gap-10">
        <div className="text-center lg:text-left px-2 md:px-0">
          <h1 className="text-3xl md:text-5xl md:leading-[60px]">
            <span className="banner-title font-bold text-4xl md:text-6xl">
              Flame Frelance Hub:
            </span>{" "}
            Your Gateway To Digital Talent and Opportunities
          </h1>
          <p className="py-4 text-sm md:text-base">
            Connect, Collaborate, and Conquer with Flame Freelance Hub, Where
            Passionate Freelancers and Exciting Opportunities Converge.
          </p>
          <Link>
            <button className="btn border-none p-4 text-[#ffff] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Get Started Now
            </button>
          </Link>
        </div>
        <img
          className="lg:max-w-3xl"
          src="https://i.ibb.co/rHYC6L0/pexels-photo-3184338.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

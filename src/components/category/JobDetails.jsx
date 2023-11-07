import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const JobDetails = () => {
    const job = useLoaderData();
  const { title, deadline, max_price, min_price, description } = job;

  const { user } = useAuthContext();
  const handleJobSubmit = () => {};


  return (
   <div>
    {
        <div className="min-h-screen py-16">
        <div className="md:grid grid-cols-12 px-2 lg:px-32">
          <div className="col-span-4">
            <div className="bg-[#0b1126] p-8 rounded-lg shadow-sm space-y-2">
              <h1 className="text-xl">{title}</h1>
              <p className="border-b border-dotted pb-5 leading-5">
                {description.length > 100
                  ? description.slice(0, 90)
                  : description}{" "}
                ...
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
              {/* <div>
                <Link to={`/jobDetails/:${_id}`}>
                  <button className="btn-sm btn border-none text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Bid now
                  </button>
                </Link>
              </div> */}
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
    }
   </div>
  );
};

export default JobDetails;

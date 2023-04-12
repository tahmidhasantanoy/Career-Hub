import React from "react";
import "./FeatureJob.css";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'


const FeatureJob = ({ feature }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    jobType,
    salary,
  } = feature;

  const naviagte = useNavigate();

  const openprofile = (id) => {
    naviagte({
      pathname: "/jobDetails",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };






  return (
    <div className=" rounded-md shadow-sm mb-5 ml-5 border m-2 feature-box relative h-96 .h-screen">
      <img className="ml-9 my-7" src={companyLogo} alt="Company Logo" />
      <h1 className="font text-zinc-800 font-semibold ml-9 mb-1">{jobTitle}</h1>
      <p className="text-slate-600 ml-9 mb-4">{companyName}</p>
      <div className="flex ml-9 mb-4 ">
        <p className="title-color font-semibold p-1 mr-1.5 rounded-sm border-2 border-indigo-300">
          {jobType.remote ? "Remote" : "Onsite"}
        </p>
        <p className="title-color font-semibold p-1 ml-1.5 rounded-sm border-2 border-indigo-300">
          {jobType.partTime ? "Part Time" : "Full Time"}
        </p>
      </div>
      <div className="flex ml-8 mb-9">
              <p className="text-slate-700 flex items-center mr-6"><MapPinIcon className=" inline h-6 w-6 text-slate-500" /><span className="text-slate-500">{jobLocation}</span></p>
              <p className="text-slate-700 flex items-center"><CurrencyDollarIcon className=" inline h-6 w-6 text-slate-500" /><span className="text-slate-500">{salary}</span></p>
            </div>
      <button onClick={() => openprofile(id)} className="ml-9 mb-9 mt-5 view-details absolute bottom-0">View Details
      </button>
    </div>
  );
};

export default FeatureJob;

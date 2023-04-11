import React from "react";
import "./FeatureJob.css";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

const FeatureJob = ({ feature }) => {
//   console.log(feature);
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
    <div className=" rounded-md shadow-sm mb-12 border m-2 h-80 feature-box">
      <img className="ml-9 my-7" src={companyLogo} alt="Company Logo" />
      <h1 className="font text-zinc-800 font-semibold ml-9 mb-1">{jobTitle}</h1>
      <p className="text-slate-600 ml-9 mb-1">{companyName}</p>
      <div className="flex ml-9 mb-3 ">
        <p className="title-color font-semibold p-1 mr-1.5 rounded-sm border-2 border-indigo-300">
          {jobType.remote ? "Remote" : "Onsite"}
        </p>
        <p className="title-color font-semibold p-1 ml-1.5 rounded-sm border-2 border-indigo-300">
          {jobType.partTime ? "Part Time" : "Full Time"}
        </p>
      </div>
      <div className="flex ml-9 mb-5">
        <p className="text-slate-700">{jobLocation}</p>
        <p className="text-slate-700">{salary}</p>
      </div>
      <button onClick={() => openprofile(id)} className="ml-9 mb-9 view-details">View Details
        {/* <Link to="/jobDetails">View Details</Link> */}
      </button>
    </div>
  );
};

export default FeatureJob;

import React from "react";
import "./AppliedJobsDetail.css";

const AppliedJobsDetail = ({ job }) => {
  const {
    id,
    comapanyLogo,
    jobTitle,
    companyLogo,
    companyName,
    jobLocation,
    salary,
    jobType,
  } = job;

  return (
    <div>
      <div className="border my-3 rounded-md flex items-center">
        <div className="company-logo flex items-center">
          <img src={companyLogo} alt="Company Logo" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <div>
              <p className="font text-zinc-800 font-semibold ml-8 mb-1">
                {jobTitle}
              </p>
              <p className="font text-zinc-400 ml-8 mb-1">{companyName}</p>
            </div>
            <div className="flex ml-8 mb-3 ">
              <p className="title-color font-semibold p-1 mr-1.5 rounded-sm border-2 border-indigo-300">
                {jobType.remote ? "Remote" : "Onsite"}
              </p>
              <p className="title-color font-semibold p-1 ml-1.5 rounded-sm border-2 border-indigo-300">
                {jobType.partTime ? "Part Time" : "Full Time"}
              </p>
            </div>
            <div className="flex ml-8 mb-5">
              <p className="text-slate-700">{jobLocation}</p>
              <p className="text-slate-700">{salary}</p>
            </div>
          </div>
          <div>
            <button className="view-details mr-9">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetail;

import React from "react";
import "./AppliedJobsDetail.css";
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'


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
              <p className="font text-zinc-800 font-semibold ml-8 mb-1 mt-12">
                {jobTitle}
              </p>
              <p className="font text-zinc-400 ml-8 mb-4">{companyName}</p>
            </div>
            <div className="flex ml-8 mb-6 ">
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

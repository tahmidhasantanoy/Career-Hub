import React from "react";
import "./JobCategory.css"

const JobCategory = ({ job }) => {
  const { icon, jobTitle, jobQuantity } = job;
  return (
    <div className=".bg-cyan-50 rounded-md m-3 p-3 py-5 box">
      <img className="bg-indigo-50 rounded-sm p-2 m-5 .mt-8" src={icon} alt="" />
      <p className="ml-5 job-title">{jobTitle}</p>
      <p className="ml-5 job-quantity">{jobQuantity}<span> Jobs Available</span></p>
    </div>
  );
};

export default JobCategory;

import React from "react";
import { getFromDB } from "../utilities/addToDB";
import { getJobListFromDB } from "../utilities/getJobListFromDB";
import { useLoaderData } from "react-router-dom";
import AppliedJobsDetail from "../AppliedJobsDetail/AppliedJobsDetail";

const AppliedJobs = () => {
  // const previouslyAppliedJobs = getFromDB()

  // for(const jobId in previouslyAppliedJobs){
  //     console.log(jobId);
  // }

  // const data = getJobListFromDB()
  // console.log(data);

  const appliedJobsFromDB = useLoaderData();
  //   console.log(appliedJobsFromDB);

  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-center mt-24 mb-64 mr-5">
        Applied Jobs
      </h3>
      {/* change here */}
      <div className="flex justify-end mr-52">
        <div className=" relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>ReactJS Dropdown</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>
      </div>
      {/* change here */}
      <div className="mx-52">
        {appliedJobsFromDB.map((job, idx) => (
          <AppliedJobsDetail key={idx} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

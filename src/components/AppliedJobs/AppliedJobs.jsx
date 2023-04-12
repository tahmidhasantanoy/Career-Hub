import React from "react";
import { getFromDB } from "../utilities/addToDB";
import { getJobListFromDB } from "../utilities/getJobListFromDB";
import { useLoaderData } from "react-router-dom";
import AppliedJobsDetail from "../AppliedJobsDetail/AppliedJobsDetail";

const AppliedJobs = () => {
  const appliedJobsFromDB = useLoaderData();
  // console.log(appliedJobsFromDB);

  const remoteJobs = () => {
    const storedRemoteJobs = appliedJobsFromDB.filter(
      (jobs) => jobs.jobType.remote === true
    );
    console.log(remoteJobs);
  };
  const onsiteJobs = () => {
    const storedOnsiteJobs = appliedJobsFromDB.filter(
      (jobs) => jobs.jobType.remote === false
    );
    console.log(remoteJobs);
  };

  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-center mt-24 mb-64 mr-5">
        Applied Jobs
      </h3>
      {/* change here */}
      <div className="flex justify-end mr-52">
        <button onClick={remoteJobs} className="view-details ml-5">
          Remote Jobs
        </button>
        <button className="view-details ml-5">Onsite Jobs</button>
      </div>
      {/* change here */}
      <div className="mx-52">
        {appliedJobsFromDB.map((job, idx) => (
          <AppliedJobsDetail
            key={idx}
            job={job}
            remoteJobs={remoteJobs}
            onsiteJobs={onsiteJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

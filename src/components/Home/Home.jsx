import React from "react";
import PersonImg from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Home = () => {
  const jobCategoryData = useLoaderData();
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mx-48 w-9/12">
        <div>
          <h2 className="text-5xl font-semibold my-3.5">
            One Step <br /> Closer To Your <br />
            <span className="title-color">Dream Job</span>
          </h2>
          <p className="text-slate-500 my-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-bg-color my-4">Get Started</button>
        </div>
        <div>
          <img className="" src={PersonImg} alt="" />
        </div>
      </div>


      <div className="my-32 mx-48">
        <h1 className="text-4xl text-center font-bold my-3">Job Category List</h1>
        <p className="text-center text-slate-500 mb-7">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center ">
          {jobCategoryData.map((job, idx) => (
            <JobCategory key={idx} job={job} />
          ))}
        </div>
      </div>
      <div>
        <FeatureJobs/>
      </div>
    </div>
  );
};

export default Home;

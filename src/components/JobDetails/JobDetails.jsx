import React from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import "./JobDetails.css"
import { addToDB } from "../utilities/addToDB";

const JobDetails = () => {
  const featureJobData = useLoaderData();
  //  console.log(featureJobData);

  const [searchparams] = useSearchParams();
  const searchId = searchparams.get("id"); //clicked id
  //   console.log(searchId);

  const searchInfo = featureJobData.find((feature) => feature.id === searchId);
  console.log(searchInfo);
  const {
    id,
    description,
    educationalRequirements,
    email,
    experiences,
    phone,
    jobTitle,
    salary,
    jobResponsibilities,
    jobLocation,
  } = searchInfo;

  return (
    <div className="mx-52">
      <h3 className="text-4xl font-semibold text-center mt-24 mb-64 mr-5">Job Details</h3>
      <div className="flex sm:flex-col md:flex-row lg:flex-row justify-center">
        <div className=" w-9/12 mb-12">
          <p>
            <span className="font-semibold">Job Description : </span>{" "}
            <span className="text-slate-500">{description}</span>{" "}
          </p>
          <br />
          <p>
            <span className="font-semibold">Job Responsibility : </span>
            <span className="text-slate-500">{jobResponsibilities}</span>
          </p>
          <br />
          <p>
            <span className="font-semibold">Educational Requirements: </span>{" "}
            <br />{" "}
            <span className="text-slate-500">{educationalRequirements}</span>
            <br />
          </p>
          <br />
          <p>
            <span className="font-semibold">Experiences : </span> <br />{" "}
            <span className="text-slate-500">{experiences}</span>
            <br />
          </p>
        </div>
        <div>
          <div className="box rounded-md mr-8">
            <h5 className="font-bold p-3 pl-6">Job Details</h5>
            <hr className="mx-4 font-extrabold"/>
            <p className="pl-3"><span className="font-semibold">Salary :</span> <span className="text-slate-600">{salary} (Per Month) </span> </p>
            <p className="pl-3"><span className="font-semibold">Job Title :</span> <span className="text-slate-600">{jobTitle}</span></p>

            <div className="p-7">
              <h5 className="font-semibold break-all border-b-2 p-2">
                Contact Information
              </h5>
              <p><span className="font-semibold">Phone :</span> <span className="text-slate-600">{phone}</span></p>
              <p><span className="font-semibold">Email :</span> <span className="text-slate-600">{email}</span></p>
              <p><span className="font-semibold">Address :</span> <span className="text-slate-600">{jobLocation}</span></p>
            </div>
          </div>
          <div className="pr-8">
          <button onClick={() => addToDB(id)} className="btn-apply-now w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
 
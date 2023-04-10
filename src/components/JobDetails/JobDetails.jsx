import React from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";

const JobDetails = () => {
  const featureJobData = useLoaderData();
  //  console.log(featureJobData);

  const [searchparams] = useSearchParams();
  const searchId = searchparams.get("id"); //clicked id
  //   console.log(searchId);

  const searchInfo = featureJobData.find((feature) => feature.id === searchId);
  console.log(searchInfo);

  return (
    <div>
      <h3 className="text-center">Job Details</h3>
      <div className="flex justify-center">
        <div>
          <p>
            <span>Job Description :</span>{" "}
          </p>
          <p>
            <span>Job Responsibility : </span>
          </p>
          <p>
            <span>Educational Requirements:</span>
            <br />
          </p>
          <p>
            <span>Experiences :</span>
            <br />
          </p>
        </div>
        <div>
          <div>
          <h5 className="border">Job Details</h5>
          <p>Salary : {} (Per Month)</p>
          <p>Job Title : {}</p>

          <h5>Contact Information</h5>
          <p>Phone : {}</p>
          <p>Email : {}</p>
          <p>Address : {}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
// export {JobDetails,heypara}

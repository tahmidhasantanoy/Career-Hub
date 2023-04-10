import React, { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("feature-job.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="flex flex-col justify-center my-32 mx-48 ">
      <h1 className="text-4xl text-center font-bold my-3">Featured Jobs</h1>
      <p className="text-center text-slate-500 mb-7">
      Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureJob key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;

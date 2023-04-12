import { getFromDB } from "./addToDB";

const getJobListFromDB = async () => {
  const previouslyAppliedJobs = getFromDB();

  const featureData = await fetch("feature-job.json");
  const features = await featureData.json();

  let appliedJobs = [];

  for (const jobId in previouslyAppliedJobs) {
    const searchId = features.find((feature) => feature.id === jobId);
    appliedJobs.push(searchId);
  }
  return appliedJobs;
};

export { getJobListFromDB };

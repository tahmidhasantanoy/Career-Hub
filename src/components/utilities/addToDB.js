const addToDB = (addId) => {
  let appliedJobList = {};

  const storedJobs = localStorage.getItem("Apllied job list");
  if (storedJobs) {
    appliedJobList = JSON.parse(storedJobs);
  }

  const quantity = appliedJobList[addId];
  if (quantity) {
    alert("applied alreay!");
  } else {
    //No?
    appliedJobList[addId] = 1;
  }

  localStorage.setItem("Apllied job list", JSON.stringify(appliedJobList));
};

const getFromDB = () => {
  let appliedJobList = {};

  const storeJobs = localStorage.getItem("Apllied job list");
  if (storeJobs) {
    appliedJobList = JSON.parse(storeJobs);
  }
  return appliedJobList;
};

export { addToDB, getFromDB };

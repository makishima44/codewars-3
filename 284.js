function match(candidate, job) {
  if (!candidate.hasOwnProperty("minSalary")) {
    throw new Error("Candidate has no minSalary");
  }

  if (!job.hasOwnProperty("maxSalary")) {
    throw new Error("Job has no maxSalary");
  }

  return candidate.minSalary * 0.9 <= job.maxSalary ? true : false;
}

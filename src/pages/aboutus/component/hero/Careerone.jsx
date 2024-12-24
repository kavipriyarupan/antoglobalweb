import React from "react";
import PageLayoutcommon from "./PageLayoutcommon";

const Careerone = () => {
  const jobData = {
    jobDescription: [
      // First line as heading
      "We are looking for an experienced Software Engineer to join our team.", // Second line as paragraph
      "Responsibilities include working on developing web applications, collaborating with cross-functional teams, and maintaining code quality.", // Third line and onwards in list format
      "Technical Requirements: Strong knowledge of JavaScript, React, and Node.js.",
      "Preferred Skills: Experience with Docker and Kubernetes is a plus.",
      "Responsibilities: Develop scalable and secure web applications, optimize user experiences, and ensure cross-browser compatibility.",
      "Support: We offer a collaborative environment with mentorship opportunities and career growth.",
      "Languages Known: English, Spanish.",
      "Schedule: Full-time, 9 AM to 5 PM.",
    ],
    technicalRequirements: [
      "Electrical design",
      "PLC & HMI Programming",
      "SERVO Programming",
      "SPM Machine handling",
      "Auto CAD",
    ],
    preferredSkills: [
      "Siemens & Mitsubishi PLCs and VFDs",
      "Problem-solving skill",
      "Project management with SPM",
      "SCADA & MES project Handling",
    ],
    responsibilities: [
      "Design, Program, and Commission PLC Systems",
      "HMI/SCADA System Development",
      "Troubleshooting and Debugging",
    ],
    support: [
      "CareerGrowth",
      "Health insurance",
      "Provident Fund",
      "Performance bonus",
      "Yearly bonus",
    ],
    languagesKnown: ["Tamil", "English"],
    schedule: ["Dayshift", "Weekend Availability"],
  };

  // Ensure jobData is logged to confirm it has the expected values
  console.log("Job Data Passed to Pagelayoutcommon:", jobData);

  return (
    <PageLayoutcommon
      jobDescription={jobData.jobDescription}
      technicalRequirements={jobData.technicalRequirements}
      preferredSkills={jobData.preferredSkills}
      responsibilities={jobData.responsibilities}
      support={jobData.support}
      languagesKnown={jobData.languagesKnown}
      schedule={jobData.schedule}
    />
  );
};

export default Careerone;

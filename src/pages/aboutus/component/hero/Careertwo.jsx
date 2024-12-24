import React from "react";
import PageLayoutcommon from "./PageLayoutcommon";

const Careerone = () => {
  const jobData = {
    jobDescription: [
      "We are looking for motivated and skilled professionals who are passionate about automation and control systems. If you're driven to succeed and thrive in challenging environments, this role is perfect for you.",
      "You are the right candidate for this position if:",
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

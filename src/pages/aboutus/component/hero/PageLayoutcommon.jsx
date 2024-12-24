import React, { useState } from "react";
import PropTypes from "prop-types";

const PageLayoutcommon = ({
  jobDescription,
  technicalRequirements = [],
  preferredSkills = [],
  responsibilities = [],
  support = [],
  languagesKnown = [],
  schedule = [],
}) => {
  const [selectedTab, setSelectedTab] = useState("PageLayout");
  const [fileName, setFileName] = useState(""); // To store the selected file name

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the filename when a file is selected
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Statusbar */}
      <div className="p-4 bg-zinc-100 text-black h-[55px] border-t border-b border-slate-200">
        <div className="ml-[170px] flex gap-[150px]">
          <h1
            onClick={() => setSelectedTab("PageLayout")}
            className={`cursor-pointer ${
              selectedTab === "PageLayout" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Role Description
          </h1>
          <h2
            onClick={() => setSelectedTab("Form")}
            className={`cursor-pointer ${
              selectedTab === "Form" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Application
          </h2>
        </div>
      </div>

      {/* Content Area */}
      {selectedTab === "PageLayout" ? (
        <div className="flex flex-col items-center space-y-10 p-10">
          {/* Main Rectangle Box */}
          <div className="w-full max-w-3xl h-auto p-6 bg-sky-100 text-black rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700">
              Job Description
            </h2>

            {Array.isArray(jobDescription) ? (
              <>
                <h3 className="mt-4 text-lg font-normal">
                  {jobDescription[0]}
                </h3>
                {jobDescription[1] && (
                  <p className="mt-2 text-lg font-medium">
                    {jobDescription[1]}
                  </p>
                )}
                {jobDescription.length > 2 && (
                  <ul className="list-disc pl-5 mt-4">
                    {jobDescription.slice(2).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <p className="mt-2">
                {jobDescription || "No job description available"}
              </p>
            )}
          </div>

          {/* First Row with Left1 and Right1 */}
          <div className="flex w-full max-w-3xl h-[250px] justify-between space-x-4">
            <div className="flex-1 p-6 bg-slate-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Technical Requirements</h3>
              <ul className="list-disc pl-5 mt-4">
                {(technicalRequirements || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-6 bg-teal-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Preferred skills</h3>
              <ul className="list-disc pl-5 mt-4">
                {(preferredSkills || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row with Left2 and Right2 */}
          <div className="flex w-full max-w-3xl h-[250px] justify-between space-x-4">
            <div className="flex-1 p-6 bg-fuchsia-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Your Responsibilities</h3>
              <ul className="list-disc pl-5 mt-4">
                {(responsibilities || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-6 bg-yellow-100	 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Our Support for You</h3>
              <ul className="list-disc pl-5 mt-4">
                {(support || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Smaller Rectangle Boxes */}
          <div className="flex justify-between space-x-4">
            <div className="w-[380px] max-w-3xl p-6 bg-orange-100 text-black rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">Languages Known</h2>
              <ul className="list-disc pl-5 mt-4">
                {(languagesKnown || []).map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>

            <div className="w-[380px] max-w-3xl p-6 bg-pink-100 text-black rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">Schedule</h2>
              <ul className="list-disc pl-5 mt-4">
                {(schedule || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full h-[700px] max-w-2xl bg-white rounded-lg p-8">
            {/* Header Section */}
            <div className="text-center">
              <button className="bg-sky-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
                Apply Now
              </button>
              <h1 className="text-2xl font-semibold mt-4">
                Add Your Info Below
              </h1>
              <p className="text-gray-500">
                Enter your details in the form below
              </p>
            </div>

            {/* Form Section */}
            <form className="mt-6 space-y-6">
              {/* Name and Email */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone *"
                className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />

              {/* Tell Us About You */}
              <textarea
                placeholder="Tell us about you *"
                rows="4"
                className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none"
              ></textarea>

              {/* File Upload Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg border shadow-sm">
                {/* Hidden file input */}
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("file-input").click()}
                  className="bg-sky-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
                >
                  CHOOSE FILES
                </button>
                <span className="text-gray-500 text-sm">
                  {fileName || "No Files Chosen"}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Accepted file types: rtf, pdf, doc, docx. Max. file size: 2 MB
              </p>

              {/* Captcha and Submit */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-500">10 + 1 =</span>
                  <input
                    type="text"
                    className="w-16 ml-4 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-sky-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700"
                >
                  SUBMIT →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

PageLayoutcommon.defaultProps = {
  jobDescription: "No job description available",
  technicalRequirements: [],
  preferredSkills: [],
  responsibilities: [],
  support: [],
  languagesKnown: [],
  schedule: [],
};

PageLayoutcommon.propTypes = {
  jobDescription: PropTypes.string,
  technicalRequirements: PropTypes.arrayOf(PropTypes.string),
  preferredSkills: PropTypes.arrayOf(PropTypes.string),
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  support: PropTypes.arrayOf(PropTypes.string),
  languagesKnown: PropTypes.arrayOf(PropTypes.string),
  schedule: PropTypes.arrayOf(PropTypes.string),
};

export default PageLayoutcommon;

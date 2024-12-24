import React, { useState } from "react";
import Background from "../../assets/Background.png";
import Connectus from "../../assets/Connectus.png";

const countries = [
  "None",
  "United States",
  "Canada",
  "United Kingdom",
  "India",
  "Australia",
  "South Korea",
  "Europe",
  "Russia",
];

const Contactus = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!/^[a-zA-Z\s]+$/.test(name))
      newErrors.name = "Name must only contain letters.";
    if (!mobile) newErrors.mobile = "Mobile number is required.";
    if (!email) newErrors.email = "Email address is required.";
    if (email && !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please include '@' in the email address.";
    if (!selectedCountry) newErrors.country = "Country is required.";
    if (!message) newErrors.message = "Message is required.";
    if (message.split(" ").length > 250)
      newErrors.message = "Message should be under 250 words.";

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
      // Handle the form submission logic here
    }
  };

  return (
    <div>
      {/* Client Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${Background})`, // Correctly set background image
        }}
      >
        <div className="absolute inset-0"></div> {/* Overlay */}
        <div className="relative flex items-center w-full px-8 lg:px-16">
          {/* Text Section */}
          <div className="w-1/2 text-left text-white">
            <h2 className="text-4xl font-semibold mb-4 text-center mx-auto text-blue-700">
              Let's Talk
            </h2>
            <h2 className="text-2xl font-semibold mb-4 text-center mx-auto text-black">
              Have a Question ? We're just{" "}
              <span className="text-blue-700">a message away</span>
            </h2>
            <p className="text-xl font-normal text-center mx-auto text-gray-500">
              We’re here to connect with you! At AntoGlobal, we believe every
              conversation is an opportunity to create impactful solutions.
              Whether you're seeking advice, have questions, or need our
              services, we’re ready to help. Let’s discuss how we can drive
              innovation together. Reach out today, and let’s start building the
              future!
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex">
            <img
              src={Connectus} // Correctly used imported image
              alt="Empowering Industries"
              className="rounded-lg ml-[130px] h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center justify-center bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          {" "}
          Connect with us Now!
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Let us know your details, and we'll get back to you soon.
        </p>
        <form
          className="mt-6 w-full max-w-lg bg-white shadow-lg rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="number"
              placeholder="Mobile Number *"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}

            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <span
                  className={
                    selectedCountry ? "text-gray-800" : "text-gray-400"
                  }
                >
                  {selectedCountry || "Country *"}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto z-10 w-full">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCountry(country === "None" ? "" : country);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>

          <textarea
            placeholder="Message *"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

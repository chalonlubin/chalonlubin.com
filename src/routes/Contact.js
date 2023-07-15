import React from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      }).toString(),
    })
      .then(() =>
        toast("Message Received!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((error) =>
        toast("Failed to send message", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );

    e.target.reset();
  }

  return (
    <div className="mb-20  flex justify-center">
      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 flex flex-col"
      >
        <h2 className="text-black text-2xl mb-1 font-heading font-bold">
          Let's Connect
        </h2>
        <p className="leading-relaxed mb-5 text-black p-2 text-md">
          Fill out the form below, or you can email me directly at
          chalonlubin.dev@gmail.com and I'll get back to you within 48 business
          hours.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-200 rounded border border-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-200 rounded border border-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-sm text-gray-400">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full bg-gray-200 rounded border border-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="freelance">Freelance</option>
            <option value="job_opportunity">Job Opportunity</option>
            <option value="networking">Networking</option>
          </select>
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="phoneNumber"
            className="leading-7 text-sm text-gray-400"
          >
            Phone Number (Optional)
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full bg-gray-200 rounded border border-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-200 rounded border border-gray-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-600 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

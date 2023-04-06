import React from "react";
import { toast } from "react-toastify";

/** Contact Page: Contains form for contact
 *
 *  Props: none
 *  State: formData
 *
 * App --> RouteList --> Contact
 */
function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  /** Handle form submission:
   * - try to send message via Netlify
   *    - if sent, show success message
   *    - if fails, show error message
   **/
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: {
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
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
    <div className="m-10 flex justify-center">

      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 flex flex-col"
      >
        <h2 className="text-white text-2xl mb-1 font-medium title-font">
          Get in Touch
        </h2>
        <p className="leading-relaxed mb-5 bg-gray-800/75 rounded text-white p-2 text-md">
          Would you like to connect? Great! Fill out the form below, and I'll
          get back to you within 48 hours. Need to reach me quickly? E-mail me directly @ chalonlubin.dev@gmail.com
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

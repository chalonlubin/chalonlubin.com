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
   * - try to send message via Nelify
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
    <div className="container px-5 py-10 mx-auto flex md:flex-nowrap flex-wrap">
      <div className="hidden sm:block w-full lg:w-1/2 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden md:mr-12 py-60 mt-10 relative">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          style={{ filter: "opacity(0.9)" }}
          src="https://www.google.com/maps/embed/v1/place?q=Bend,+OR,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="lg:w-1/2 md:w-2/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Get in Touch
        </h2>
        <p className="leading-relaxed mb-5 bg-gray-800/75 rounded text-white p-2 text-xl">
          Would you like to connect? Great! Fill out the form below,
          and I'll get back to you within 48 hours.
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
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

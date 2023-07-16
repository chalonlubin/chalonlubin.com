import React, { useState, useEffect } from "react";

function ResumePopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".resume-popup-content")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="inline-block text-sm font-semibold px-4 py-2 leading-none border rounded border-black hover:border-purple-500 hover:text-purple-500 mt-4 lg:mt-0"
        onClick={togglePopup}
      >
        Resume
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
          style={{ zIndex: 2 }}
        >
          <div
            className="bg-white p-4 rounded shadow-md resume-popup-content"
            style={{ pointerEvents: "auto" }}
          >
            <p className="text-black text-center font-semibold mb-4">
              View or Download Resume
            </p>
            <div className="flex justify-between">
              <a
                className="px-3 py-1 mx-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                href="https://docs.google.com/document/d/16dPzCRb-18-Fv5BgqPg6DQE9cDnOdLFkjGJh4BqDyt0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View (Google Docs)
              </a>
              <a
                className="px-3 py-1 mx-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                href="https://docs.google.com/document/d/16dPzCRb-18-Fv5BgqPg6DQE9cDnOdLFkjGJh4BqDyt0/export?format=pdf"
                target="_blank"
                download="YourResumeName.pdf"
                rel="noopener noreferrer"
              >
                Download (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumePopup;

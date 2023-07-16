import React from "react";

const Banner = ({ message, color = "bg-purple-300" }) => {
  return (
    <div className={`${color} py-3 text-black text-center`}>
      {message}
    </div>
  );
};

export default Banner;

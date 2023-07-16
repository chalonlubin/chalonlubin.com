import React from "react";


/** Banner
 *
 *  Props: message - string
 *         color - string
 *  State: none
 *
 * App --> RouteList --> Route --> Banner
 */
const Banner = ({ message, color = "bg-purple-300" }) => {
  return (
    <div className={`${color} py-1.5 text-black font-thin text-sm text-center`}>{message}</div>
  );
};

export default Banner;

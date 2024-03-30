import React from "react";
import OvalShadow from "./OvalShadow";

const Corner = ({ title, description, urlIcon, bgColor }) => {
  return (
    <article className="flex flex-col items-center p-[5%] min-w-44 w-full">
      <div className="flex justify-center relative">
        <img src={urlIcon} alt="img" className={`h-48 z-[2] p-2 w-full text-gray-300 ${bgColor || "bg-white"}`} />
        <OvalShadow />
      </div>
      <h1 className="font-kinetika_bold text-xl py-5">{title}</h1>
      <div>
        <span className="font-Kinetika_regular text-sl">{description}</span>
      </div>
    </article>
  );
};

export default Corner;

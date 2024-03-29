import React from "react";
import OvalShadow from "./OvalShadow";

const Corner = ({ title, description, urlIcon }) => {
  return (
    <article className="flex flex-col items-center p-[5%] min-w-44 w-full">
      <div className="flex justify-center relative w-full">
        <img src={urlIcon} alt="Les Corners" className="h-48 z-[2] bg-white p-3 w-full" />
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

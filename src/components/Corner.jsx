import React from "react";

const Corner = ({ title, description, urlIcon }) => {
  return (
    <article className="flex flex-col items-center p-[5%]">
      <div className="flex justify-center">
        <img src={urlIcon} alt="Les Corners" className="h-48" />
      </div>
      <h1 className="font-kinetika_bold text-xl">{title}</h1>
      <div>
        <span className="font-Kinetika_regular text-sl">{description}</span>
      </div>
    </article>
  );
};

export default Corner;

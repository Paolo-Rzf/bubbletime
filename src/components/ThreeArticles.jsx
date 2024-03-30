import React from "react";

const ThreeArticles = ({ children, title, description, bgColor="" }) => {
  return (
    <div className={`w-full flex flex-col justify-center text-center rounded-b-xl py-10 min-w-[700px] px-[10%] ${bgColor}`}>
      <div className="font-kinetika_bold text-4xl">
        {title}
      </div>
      {
        description &&
        <div className="font-Kinetika_regular text-2xl pt-2">
          {description}
        </div>
      }
      <div className="grid grid-cols-3 gap-[5%]">
        {children}
      </div>
    </div>
  );
};

export default ThreeArticles;

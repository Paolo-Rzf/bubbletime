import React from "react";

const ThreeArticles = ({ children, title, description }) => {
  return (
    <div className="w-full flex flex-col justify-center text-center rounded-b-xl space-y-8 px-[10%] py-10 min-w-[700px]">
      <div className="font-kinetika_bold text-4xl">
        {title}
      </div>
      <div className="font-Kinetika_regular text-2xl">
        {description}
      </div>
      <div className="grid grid-cols-3 gap-[5%]">
        {children}
      </div>
    </div>
  );
};

export default ThreeArticles;

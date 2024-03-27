import React from "react";
import "css/ButtonInternalShadow.css"

const ButtonInternalShadow = ({ bgColor, title }) => {
  return (
    <div className="flex justify-center fit-content relative">
      <button className={`outline-none ${bgColor} py-4 rounded-full font-kinetika_bold text-xl relative overflow-hidden z-[2] w-72`}>
        {title}
      </button>
      <div className="oval_shadow z-[1]"></div>
    </div>
  );
};

export default ButtonInternalShadow;

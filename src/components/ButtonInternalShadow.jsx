import React from "react";
import "../styles/InternalShadowBottom.css"

const ButtonInternalShadow = ({ bgColor }) => {
  return (
    <div className="flex justify-center">
      <button className={`outline-none ${bgColor} py-4 px-16 rounded-full font-kinetika_bold text-3xl relative overflow-hidden`}>
        Être franchisé
        <span className="absolute bg-transparent w-[90%] h-[80%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bottomShadow"></span>
      </button>
    </div>
  );
};

export default ButtonInternalShadow;

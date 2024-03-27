import React from "react";

const ButtonInternalShadow = ({ bgColor }) => {
  return (
    <div className="flex justify-center">
      <button className={`outline-none ${bgColor} py-4 px-16 rounded-full font-kinetika_bold text-xl relative overflow-hidden`}>
        Être franchisé
      </button>
    </div>
  );
};

export default ButtonInternalShadow;

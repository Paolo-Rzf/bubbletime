import React from "react";
import OvalShadow from "./OvalShadow";

const ButtonInternalShadow = ({ bgColor, title }) => {
  return (
    <div className="flex justify-center fit-content relative">
      <button className={`outline-none ${bgColor} py-4 rounded-full font-kinetika_bold text-xl relative overflow-hidden z-[2] w-72`}>
        {title}
      </button>
      <OvalShadow />
    </div>
  );
};

export default ButtonInternalShadow;

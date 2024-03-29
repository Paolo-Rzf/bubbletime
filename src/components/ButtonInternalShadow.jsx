import React from "react";
import OvalShadow from "./OvalShadow";
import "css/ButtonInternalShadow.css"

const ButtonInternalShadow = ({ bgColor, title }) => {
  return (
    <div className="flex justify-center fit-content relative">
      <button className={`outline-none ${bgColor} py-4 rounded-full font-kinetika_bold text-xl relative overflow-hidden z-[2] w-72 `} id="monBouton">
        {title}
      </button>
      <OvalShadow />
    </div>
  );
};

export default ButtonInternalShadow;

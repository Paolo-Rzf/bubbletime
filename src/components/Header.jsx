import React, { useState } from "react";
import "./header.css"

export default function Header() {
  let links = [
    { name: "Nos gourmandises", link: "/" },
    { name: "Nos franchises", link: "/" },
    { name: "Evènements", link: "/" },
    { name: "Conceptions corner", link: "/" },
    { name: "06.01.02.03.04", link: "/" },
    { name: "Être franchisé", link: "/" },
  ];

  return (
    <>
      <div className="w-full sticky top-0 bg-[#f7e9c7]">
        <div className="box bg-[#81a45d] h-10 w-full"></div>
        <ul
          className={`flex justify-between font-kinetika_bold text-black last:p-4`}
        >
          {links.map((link) => (
            <li key={link.name} className="text-xl">
              <span className="cursor-pointer">
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  let links = [
    { name: "Nos gourmandises", link: "/gourmandise" },
    { name: "Nos franchises", link: "/" },
    { name: "Événements", link: "/" },
    { name: "Conceptions corner", link: "/" },
    { name: "06.01.02.03.04", link: "/" },
    { name: "Être franchisé", link: "/" },
  ];
  const [selectedMenu, setSelectedMenu] = useState("Être franchisé");

  const handleClick = (e) => {
    setSelectedMenu(e.target.textContent);
  };

  return (
    <>
      <nav className="w-full sticky top-0 bg-[#f7e9c7] z-10">
        <div className="box bg-[#81a45d] h-10 w-full"></div>
        <ul className={`flex justify-between font-kinetika_bold text-black last:p-4`}>
          {links.map((link) => (
            <li key={link.name} className={`text-sm text-center min-w-36 ${selectedMenu === link.name && "bg-[#81a45d] rounded-full"}`} onClick={handleClick}>
              <Link to={link.link} className="cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
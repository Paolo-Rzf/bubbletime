import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  let links = [
    { name: "Nos gourmandises", link: "/gourmandise" },
    { name: "Nos franchises", link: "/ourfranchises" },
    { name: "Événements", link: "/events" },
    { name: "Conceptions corner", link: "/cornerdesigns" },
    { name: "06.01.02.03.04", link: "/num" },
    { name: "Être franchisé", link: "/beafranchisee" },
  ];

  const [selectedMenu, setSelectedMenu] = useState("Être franchisé");
  const location = useLocation();

  useEffect(() => {
    // This effect runs when the location (URL) changes
    const pathname = location.pathname;

    // Find the matching link based on the pathname
    const matchedLink = links.find((link) => link.link === pathname);

    // If a matching link is found, update the selected menu
    if (matchedLink) {
      setSelectedMenu(matchedLink.name);
    } else {
      // If no matching link is found, default to "Être franchisé" or any other default you prefer
      setSelectedMenu("Être franchisé");
    }
  }, [location, links]);

  return (
    <>
      <nav className="w-full sticky top-0 bg-[#f7e9c7] z-10">
        <div className="box bg-[#81a45d] h-10 w-full"></div>
        <ul className={`flex justify-between font-kinetika_bold text-black last:p-4`}>
          {links.map((link, index) => (
            <li key={link.name + index} className={`text-sm text-center min-w-36 ${selectedMenu === link.name && "bg-[#81a45d] rounded-full"}`}>
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
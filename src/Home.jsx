import React from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center bg-[#ff7e00] text-center rounded-b-xl space-y-8">
        <div className="font-kinetika_bold text-6xl">
          Les corners Bubble Sun Ice
        </div>
        <div className="font-Kinetika_regular text-4xl">
          Vous avez l'espace, nous avons le commerce idéal à implanter au sein
          de vos enseignes
        </div>
        <div className="flex justify-center">
          <button className="outline-none bg-[#81a45d] py-4 px-16 rounded-full font-kinetika_bold text-3xl">
            Être franchisé
          </button>
        </div>
      </div>
    </>
  );
}

import React from "react";
import ButtonInternalShadow from "./ButtonInternalShadow";

export default function SecondPage() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center bg-[#f7e9c7] text-center p-10 space-y-10">
        <div>
          <h1 className="font-kinetika_bold text-6xl">
            Des offres 100% personnalisables
          </h1>
        </div>
        <div>
          <span className="font-Kinetika_regular text-4xl">
            Faitre découvrir à votre clientèle des nouvelles saveurs tout en
            s'adoptant à leur besoin
          </span>
        </div>
        <div className="flex justify-center items-center space-x-16">
          <ButtonInternalShadow bgColor="bg-[#81a45d]" />
          <ButtonInternalShadow bgColor="bg-[#81a45d]" />
          <ButtonInternalShadow bgColor="bg-[#81a45d]" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-10 space-y-10">
        <div>
          <h1 className="font-kinetika_bold text-6xl">Les corners nomades</h1>
        </div>
        <div>
          <span className="font-Kinetika_regular text-4xl">
            Besoin d'être présent à un évènement, nous avons la solution
            protative
          </span>
        </div>
      </section>
    </>
  );
}

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
        <div className="w-[70%]">
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
      <section className="flex flex-col justify-center items-center text-center p-10 space-y-10">
        <div>
          <h1 className="font-kinetika_bold text-6xl">Les corners nomades</h1>
        </div>
        <div>
          <span className="font-Kinetika_regular text-4xl">
            Besoin d'être présent à un évènement, nous avons la solution
            protative
          </span>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="Les Corners nomades" />
            </div>
            <h1 className="font-kinetika_bold text-3xl">Les Corners nomades</h1>
            <div className="w-[70%]">
              <span className="font-Kinetika_regular text-2xl">
                100% personnalisable, ils vous accompagneront avec tout
                l'équipement nécessaire sur vos évènements
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="Evènements " />
            </div>
            <h1 className="font-kinetika_bold text-3xl">Evènements</h1>
            <div className="w-[55%]">
              <span className="font-Kinetika_regular text-2xl">
                EVJF, anniversaire, Baby Shower, Gender reveal ... Mais aussi
                fêtes d'entreprise, de la ville, évènements sportifs vous
                pourrez être présent facilement
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="Communication" />
            </div>
            <h1 className="font-kinetika_bold text-3xl">Communication</h1>
            <div className="w-1/2">
              <span className="font-Kinetika_regular text-2xl">
                Notre équipe de communication, peut vous aider à promouvoir vos
                évènements et ou trouver les évènements stratégique pour votre
                commerce
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

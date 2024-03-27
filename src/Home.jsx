import React from "react";
import Header from "./components/Header";
import "./styles/home.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center bgOrangeGardient text-center rounded-b-xl space-y-8">
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
      <div className="w-full flex flex-col justify-center text-center rounded-b-xl space-y-8">
        <div className="font-kinetika_bold text-6xl">
          Des corners à votre image
        </div>
        <div className="font-Kinetika_regular text-4xl">
          Un corner au sein de votre enseigne pour accroître votre clientèle
          sans augmenter vos frais
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="Les Corners" />
            </div>
            <h1 className="font-kinetika_bold text-3xl">Les Corners</h1>
            <div className="w-1/2">
              <span className="font-Kinetika_regular text-2xl">
                100% personnalisable, il vous suffit de disposer de au minimum
                20m2 au sein de votre établissement pour l'accueillir
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="L'équipe " />
            </div>
            <h1 className="font-kinetika_bold text-3xl">L'équipe</h1>
            <div className="w-1/2">
              <span className="font-Kinetika_regular text-2xl">
                Nullement besoin de vous lancer dans une campage de recrutement
                on s'occupe de tout et restons disponible
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src="" alt="Ecoresponsable" />
            </div>
            <h1 className="font-kinetika_bold text-3xl">Ecoresponsable</h1>
            <div className="w-1/2">
              <span className="font-Kinetika_regular text-2xl">
                Dans une démarche RSE, nos fournisseurs, produits et
                consommables sont écoresponsables et circuits courts
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

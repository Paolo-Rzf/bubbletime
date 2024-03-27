import React from "react";
import Header from "./components/Header";
import ButtonInternalShadow from "./components/ButtonInternalShadow";
import Corner from "components/Corner";
import ThreeArticles from "components/ThreeArticles";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center bgOrangeGardient text-center rounded-b-xl space-y-8 h-80">
        <div className="font-kinetika_bold text-4xl">
          Les corners Bubble Sun Ice
        </div>
        <div className="font-Kinetika_regular text-2xl px-[8%]">
          Vous avez l'espace, nous avons le commerce idéal à implanter au sein
          de vos enseignes
        </div>
        <div className="flex justify-center">
          <ButtonInternalShadow bgColor="bg-[#81a45d]" />
        </div>
      </div>
      <ThreeArticles
        title="Des corners à votre image"
        description="Un corner au sein de votre enseigne pour accroître votre clientèle sans augmenter vos frais"
      >
        <Corner
          urlIcon="icons/corner.svg"
          title="Les Corners"
          description="100% personnalisable, il vous suffit de disposer de au minimum 20m2 au sein de votre établissement pour l'accueillir"
        />
        <Corner
          urlIcon="icons/team.svg"
          title="L'équipe"
          description="Nullement besoin de vous lancer dans une campage de recrutement on s'occupe de tout et restons disponible"
        />
        <Corner
          urlIcon="icons/ecorespo.svg"
          title="Ecoresponsable"
          description="Dans une démarche RSE, nos fournisseurs, produits et consommables sont écoresponsables et circuits courts"
        />
      </ThreeArticles>
    </>
  );
}

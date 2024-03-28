import React from "react";
import ButtonInternalShadow from "../components/ButtonInternalShadow";
import Corner from "components/Corner";
import ThreeArticles from "components/ThreeArticles";
import MainArticle from "components/MainArticle";

export default function Franchise() {
  return (
    <>
      <MainArticle
        title="Les corners Bubble Sun Ice"
        description="Vous avez l'espace, nous avons le commerce idéal à implanter au sein de vos enseignes"
      >
        <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Être franchisé" />
      </MainArticle>
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
      <MainArticle
        title="Des offres 100% personnalisables"
        description="Faites découvrir à votre clientèle des nouvelles saveurs tout en s'adoptant à leur besoin"
        bgColor="bg-[#f7e9c7]"
      >
        <div className="grid grid-cols-3 gap-[5%]">
          <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Nos recettes" />
          <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Nos fournisseurs" />
          <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Nos machines" />
        </div>
      </MainArticle>
      <ThreeArticles
        title="Les corners nomades"
        description="Besoin d'être présent à un évènement, nous avons la solution portative"
      >
        <Corner
          urlIcon="icons/ecorespo.svg"
          title="Les Corners nomades"
          description="100% personnalisable, ils vous accompagneront avec tout l'équipement nécessaire sur vos évènements"
        />
        <Corner
          urlIcon="icons/ecorespo.svg"
          title="Évènements"
          description="EVJF, anniversaire, Baby Shower, Gender reveal... Mais aussi fêtes d'entreprise, de la ville, évènements sportifs vous pourrez être présent facilement"
        />
        <Corner
          urlIcon="icons/ecorespo.svg"
          title="Communication"
          description="Notre équipe de communication, peut vous aider à promouvoir vos évènements et ou trouver les évènements stratégique pour votre commerce"
        />
      </ThreeArticles>
      <MainArticle
        title="Notre savoir faire"
        description="Partager c'est grandir ensemble"
        bgColor="bg-[url('images/bg_savoir_faire.png')] bg-cover"
      >
        <div className="grid grid-cols-3 gap-[5%] mt-12">
          <ButtonInternalShadow bgColor="bg-[#f7e9c7]" title="Notre chef cuisto" />
          <ButtonInternalShadow bgColor="bg-[#f7e9c7]" title="Gestion des corners" />
          <ButtonInternalShadow bgColor="bg-[#f7e9c7]" title="Gestion des events" />
        </div>
      </MainArticle>
    </>
  );
}

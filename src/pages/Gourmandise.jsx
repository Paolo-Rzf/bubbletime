import React from 'react'
import MainArticle from 'components/MainArticle'
import ButtonInternalShadow from 'components/ButtonInternalShadow'
import ThreeArticles from 'components/ThreeArticles'
import Corner from 'components/Corner'
import LeftCorner from 'components/LeftCorner'
import RightCorner from 'components/RightCorner'

const Gourmandise = () => {
  return (
    <>
      <MainArticle
        title="Nos gourmandises"
        description="Sucrées, salées, des envies pour les petits et les grands"
      >
        <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Recettes du mois" />
      </MainArticle>
      <ThreeArticles
        title="Nourritures"
      >
        <LeftCorner
          urlIcon="images/crepe_sucre.png"
          title="Crêpes sucrés"
          description="Fruits de saison et gourmande elles sauront combler les envies du goûter"
        />
        <Corner
          urlIcon="images/crepe_sale.png"
          title="Crêpes salés"
          description="Faites le tour du monde à travers différentes recettes au nom des capitales"
        />
        <RightCorner
          urlIcon="images/crepe_bowl.png"
          title="Crêpes bowl"
          description="Signature de Bubble Sun ice et facile à emporter"
        />
      </ThreeArticles>
      <ThreeArticles
        title="Boissons"
        bgColor="bg-[#f7e9c7]"
      >
        <LeftCorner
          urlIcon="images/bubble_tea.png"
          title="Bubble Tea"
          description="Thé vert ou thé noir, popping ou non du choix pour tout le monde"
          bgColor="bg-[#f7e9c7]"
        />
        <Corner
          urlIcon="images/milkshake.png"
          title="Milkshake"
          description="La boisson des gourmands, kinder, oréo ou saveur fruité"
          bgColor="bg-[#f7e9c7]"
        />
        <RightCorner
          urlIcon="images/smoothie.png"
          title="Smoothie"
          description="Fruit de saison et 100% vitaminé"
          bgColor="bg-[#f7e9c7]"
        />
      </ThreeArticles>
    </>
  )
}

export default Gourmandise

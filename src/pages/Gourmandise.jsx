import React from 'react'
import MainArticle from 'components/MainArticle'
import ButtonInternalShadow from 'components/ButtonInternalShadow'

const Gourmandise = () => {
  return (
    <>
      <MainArticle
        title="Nos gourmandises"
        description="Sucrées, salées, des envies pour les petits et les grands"
      >
        <ButtonInternalShadow bgColor="bg-[#81a45d]" title="Recettes du mois" />
      </MainArticle>
    </>
  )
}

export default Gourmandise

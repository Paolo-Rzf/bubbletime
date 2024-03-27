import React from 'react'
import "css/GardientColor.css"

const MainArticle = ({ children, title, description, bgColor = "bgOrangeGardient rounded-b-xl" }) => {
  return (
    <div className={`w-full flex flex-col justify-center ${bgColor} text-center space-y-6 h-72 px-[8%]`}>
      <div className="font-kinetika_bold text-4xl">
        {title}
      </div>
      <div className="font-Kinetika_regular text-2xl">
        {description}
      </div>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  )
}

export default MainArticle

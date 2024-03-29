import React, {useRef, useEffect, useState} from "react";
import OvalShadow from "./OvalShadow";
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const moveOutAnimation = keyframes`
  from {
    transform: translateX(-500px);
  }
  to {
    transform: translateX(0px); /* Déplace de 200px vers la droite, ajustez selon vos besoins */
  }
`;

const StyledItem = styled.div`
  animation: ${moveOutAnimation} 1s ease forwards;
`;

const LeftCorner = ({ title, description, urlIcon }) => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
  }, [])

  return (
    <div className="flex flex-col items-center p-[5%] min-w-44 w-full" ref={myRef}>
      {
        myElementIsVisible ?
          <CSSTransition in={true} timeout={1000} classNames="item">
            <StyledItem>
              <div className="flex justify-center relative w-full">
                <img src={urlIcon} alt="Les Corners" className="h-48 z-[2] bg-white p-3 w-full" />
                <OvalShadow />
              </div>
            </StyledItem>
          </CSSTransition> :
          <div className="flex justify-center relative w-full">
            <img src={urlIcon} alt="Les Corners" className="h-48 z-[2] bg-white p-3 w-full" />
            <OvalShadow />
          </div>
      }
      <h1 className="font-kinetika_bold text-xl py-5">{title}</h1>
      <div>
        <span className="font-Kinetika_regular text-sl">{description}</span>
      </div>
    </div>
  );
};

export default LeftCorner;

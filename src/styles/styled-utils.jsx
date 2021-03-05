import styled, { css } from "styled-components";
import { fadeInLeftAnimation } from "./animation-styled";

export const generateTextAnimation = (maxTextLength, element, animationName, duration, delay=0, extraProps=``) => {
   let animationStyles = ``;
   for(let i = 0; i < maxTextLength; i++) {
      const actualDelay = delay?.offset ? delay.offset + (i * delay.value) : i * delay;
      animationStyles += `
         ${element}:nth-of-type(${i+1}) {
            animation: ${animationName} ${duration}s ${actualDelay}s ${extraProps};
         }
      `
   }
   return css`${animationStyles}`;
}

export const containerStyles = css`
   height: 100%;
   display: flex;
   flex-direction: column;
`;

export const glassyBackground = css`
   background-color: rgba(255, 255, 255, .1);
   backdrop-filter: blur(3px);
`;

export const positionAbsOrigin = css`
   position: absolute;
   top: 0;
   left: 0;
`;

export const containerOverlayLight = css`
   border-radius: 10px;
   background-color: rgba(255, 255, 255, .5);
   box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
`;

export const containerOverlayDark = css`
   border-radius: 10px;
   background-color: rgba(0, 0, 0, .5);
   box-shadow: 0 5px 15px rgba(255, 255, 255, .3);
`;

export const SectionTitle = styled.h2`
   text-align: center;
   font-size: 2.5rem;
   margin-bottom: 2.8rem;
   ${fadeInLeftAnimation}
   animation: fade-in-from-left .7s cubic-bezier(.4, .1, .2, 1.5);
`;

import { css } from "styled-components";

export const generateTextAnimation = (maxTextLength, element, animationName, duration, delay=0, extraProps=``) => {
   let animationStyles = ``;
   for(let i = 0; i < maxTextLength; i++) {
      const actualDelay = delay?.offset ? delay.offset + (i * delay.value) : i * delay;
      animationStyles += `
         ${element}:nth-of-type(${i+1}) {
            animation: ${animationName} ${duration}s linear ${actualDelay}s ${extraProps};
         }
      `
   }
   return css`${animationStyles}`;
}

export const glassyBackground = css`
   background-color: rgba(255, 255, 255, .1);
   backdrop-filter: blur(3px);
`;

export const positionAbsOrigin = css`
   position: absolute;
   top: 0;
   left: 0;
`;
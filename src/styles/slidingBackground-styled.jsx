import styled, { css } from "styled-components";
import { slidingBackgroundAnimation } from "../styles/animation-styled";

const slidingBGAnimation = css`
   ${slidingBackgroundAnimation}
   animation: slide-background 180s linear infinite;
`;

export const selectBackgroundFilter = backgroundNum => {
   const bkgdFilterDay = css `
      box-shadow: 0 0 0 50vh rgba(255, 255, 255, 0.5) inset;
   `;

   const bkgdFilterSunset = css `
      box-shadow: 0 0 0 50vh rgba(253, 94, 83, 0.4) inset;
   `;

   const bkgdFilterNight = css `
      box-shadow: 0 0 0 50vh rgba(7, 11, 52, 0.65) inset;
   `;

   return backgroundNum === 1 
      ? bkgdFilterSunset 
      : backgroundNum === 2 
         ? bkgdFilterNight 
         : bkgdFilterDay;
}

export const BackgroundWrapper = styled.div`
   position: relative;
   height: 100%;
   overflow-x: hidden;
`;

export const SlidingBGContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: -9999;
   background: url(${({ imgUrl }) => imgUrl }) repeat-x;
   height: 100vh;
   width: 12000px;
   transition: box-shadow 1s;
   ${({ backgroundNum }) => selectBackgroundFilter(backgroundNum)}
   ${slidingBGAnimation}
`;
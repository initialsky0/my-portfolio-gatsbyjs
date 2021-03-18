import styled, { css } from "styled-components";
import { slidingBackgroundAnimation } from "../animation-styled";

const slidingBGAnimation = css`
   ${slidingBackgroundAnimation}
   animation: slide-background 180s linear infinite;
`;

const mainContainer = css`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const selectBackgroundFilter = backgroundNum => {
   const bkgdFilterDay = css `
      box-shadow: 0 0 0 100vh rgba(255, 255, 255, 0.5) inset;
   `;

   const bkgdFilterSunset = css `
      box-shadow: 0 0 0 100vh rgba(253, 94, 83, 0.4) inset;
   `;

   const bkgdFilterNight = css `
      box-shadow: 0 0 0 100vh rgba(7, 11, 52, 0.65) inset;
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
   ${mainContainer}
`;

export const SlidingBGContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: -9999;
   background: url(${({ imgUrl }) => imgUrl });
   background-repeat: space;
   background-size: 3000px auto;
   height: 100%;
   width: 6000px;
   transition: box-shadow 1s;
   ${({ backgroundNum }) => selectBackgroundFilter(backgroundNum)}
   ${slidingBGAnimation}
`;
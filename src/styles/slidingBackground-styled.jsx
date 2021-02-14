import styled, { css } from "styled-components";
import { slidingBackgroundAnimation } from "../styles/animation-styled";

const slidingBGAnimation = css`
   ${slidingBackgroundAnimation}
   animation: slide-background 30s linear infinite;
`;

export const BackgroundWrapper = styled.div`
   position: relative;
   height: 100%;
   overflow: hidden;
`;

export const SlidingBGContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: -9999;
   background: url(${({ imgUrl }) => imgUrl }) repeat-x;
   background-size: contain;
   height: 100vh;
   width: 1000vw;
   ${slidingBGAnimation}
`;
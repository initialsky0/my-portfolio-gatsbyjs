import styled, {css} from "styled-components";
import { fadeIn } from "../styles/animation-styled";
// 1rem = 18px

const menuIconStyles = css`
   width: 1.4rem;
   height: .167rem;
   background: #060606;
`;

const fadeInAnimation = css`
   ${fadeIn};
   animation: fade-in .5s forwards;
`;

export const MenuBtnContainer = styled.div`
   cursor: pointer;
   height: 2.35rem;
   width: 2.35rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background-color: var(--white-cloud);
   opacity: 0;
   ${fadeInAnimation}
`;

export const MenuBtnStyles = styled.div`
   position: relative;
   backface-visibility: hidden;
   ${menuIconStyles}
   ${({ navState }) => navState ? `transform: rotate(45deg);` : ``}
   
   &::before {
      position: absolute;
      content: '';
      ${menuIconStyles}
      top: -.5rem;
      ${({ navState }) => navState ? `opacity: 0;` : `opacity: 1;`}
   }

   &::after {
      position: absolute;
      content: '';
      ${menuIconStyles}
      top: .5rem;
      ${({ navState }) => 
         navState 
            ? `transform: rotate(-90deg);
               top: 0;` 
            : ``
      }
   }
`;
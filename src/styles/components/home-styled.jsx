import styled from "styled-components";
import { CustomBtnContainer } from "./cutomBtn-styled";
import { containerStyles } from "../styled-utils";
import { showContent,
         fadeIn,
         fadeInTopAnimation,
         fadeInBottomAnimation,
         fadeInLeftAnimation,
         fadeInRightAnimation } from "../animation-styled";

export const HomeContainer = styled.div`
   ${containerStyles}
   margin: auto 0;
   align-items: center;
   justify-content: center;
`;

export const HomeTextContainer = styled.h1`
   margin: 0 5rem 8vh;
   text-align: center;
   font-size: 6rem;
   ${fadeInTopAnimation}
   animation: fade-in-from-top 1s both;

   @media only screen and (max-width: 800px) {
      font-size: 5.5rem;
      margin: 0 0 8vh;
   }

   @media only screen and (max-width: 600px) {
      font-size: 3rem;
      margin: 0 0 6vh;
   }
`;

export const HomeLinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;

   @media only screen and (max-width: 600px) {
      flex-direction: column;
      
      ${CustomBtnContainer}:not(:last-child) {
         margin-bottom: 1.3rem;
      }
   }

   ${CustomBtnContainer}:nth-of-type(1) {
      ${showContent}
      animation: show-content 0s 1s backwards;

      a {
         ${fadeIn}
         animation: fade-in .5s 1s backwards;
      }

      &::before {
         visibility: visible;
         ${fadeInLeftAnimation}
         animation: fade-in-from-left .5s .5s backwards;
      }
   }

   ${CustomBtnContainer}:nth-of-type(2) {
      ${showContent}
      animation: show-content 0s 1.1s backwards;

      a {
         ${fadeIn}
         animation: fade-in .5s 1.1s backwards;
      }

      &::before {
         visibility: visible;
         ${fadeInBottomAnimation}
         animation: fade-in-from-bottom .5s .6s backwards;
      }
   }

   ${CustomBtnContainer}:nth-of-type(3){
      ${showContent}
      animation: show-content 0s 1.2s backwards;

      a {
         ${fadeIn}
         animation: fade-in .5s 1.2s backwards;
      }

      &::before {
         visibility: visible;
         ${fadeInRightAnimation}
         animation: fade-in-from-right .5s .7s  backwards;
      }
   }
`;
import styled from "styled-components";
import { containerStyles } from "../pages/index-styled";
import { SectionTitle } from "../styled-utils";
import { fadeInLeftAnimation, fadeIn } from "../animation-styled";

export const AboutMeContainer = styled.div`
   ${containerStyles}

   ${SectionTitle} {
      ${fadeInLeftAnimation}
      animation: fade-in-from-left .7s cubic-bezier(.4, .1, .2, 1.5);
   }
`;

export const AboutMeContent = styled.div`
   width: 100%;
   padding: 2rem;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   background-color: rgba(255, 255, 255, .5);
   box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
   border-radius: 10px;
   ${fadeIn}
   animation: fade-in 1s .3s backwards;
`;

export const AboutMeTextContainer = styled.div`
   width: 100%;

   h3 {
      font-size: 1.5rem;
   }

   p {
      font-size: 1rem;
   }
`;

export const AboutMeImgContainer = styled.figure`
   width: 100%;
   margin: auto;
   padding: 1rem;
   
   & figcaption {
      font-size: .7rem;
      letter-spacing: .03rem;
   }
`;
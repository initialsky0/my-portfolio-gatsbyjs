import styled from "styled-components";
import { containerOverlayLight, containerStyles } from "../styled-utils";
import { fadeIn } from "../animation-styled";

export const AboutMeContainer = styled.div`
   ${containerStyles}
`;

export const AboutMeContent = styled.div`
   width: 100%;
   padding: 2rem;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   ${containerOverlayLight}
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
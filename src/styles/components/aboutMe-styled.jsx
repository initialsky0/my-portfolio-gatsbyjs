import styled from "styled-components";
import { containerStyles } from "../pages/index-styled";

export const AboutMeContainer = styled.div`
   ${containerStyles}
`;

export const AboutMeContent = styled.div`
   width: 100%;
   background-color: rgba(255, 255, 255, .5);
   border-radius: 10px;
   padding: 2rem;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
`;

export const AboutMeTextContainer = styled.div`
   width: 100%;
`;

export const AboutMeImgContainer = styled.figure`
   margin: auto;
   width: 100%;
   
   & figcaption {
      font-size: .6rem;
      word-wrap: break-word;
      height: auto;
   }
`;
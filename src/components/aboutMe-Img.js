import React from "react";
import Image from "../components/image";
import ATag from "./aTag";
import { AboutMeImgContainer } from "../styles/components/aboutMe-styled";

const AboutMeImg = () => (
   <AboutMeImgContainer>
      <Image />
      <figcaption>
         <span>
            Photo by &nbsp;
            <ATag href={`https://unsplash.com/@cgower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}>
               Christopher Gower
            </ATag> 
            &nbsp;on&nbsp;
            <ATag href={`https://unsplash.com/s/photos/tech?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText`}>
               Unsplash
            </ATag>
         </span>
      </figcaption>
   </AboutMeImgContainer>
);

export default AboutMeImg;
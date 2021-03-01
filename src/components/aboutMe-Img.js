import React from "react";
import useAboutMeImage from "../hooks/useAboutMeImg";
import ATag from "./aTag";
import Img from "gatsby-image";
import { AboutMeImgContainer } from "../styles/components/aboutMe-styled";

const AboutMeImg = () => {
   const data = useAboutMeImage();
   return (
      <AboutMeImgContainer>
         {(!data?.aboutMeImage?.childImageSharp?.fluid) 
            ? <div>Picture not found</div> 
            : <Img fluid={data.aboutMeImage.childImageSharp.fluid} />
         }
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
   )
};

export default AboutMeImg;
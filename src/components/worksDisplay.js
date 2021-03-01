import React from "react";
import Card from "./card";
import useWorksImg from "../hooks/useWorksImg";
import { WorksDispContainer } from "../styles/components/worksDisplay-styled";

const WorksDisplay = () => {
   const workImgsObj = useWorksImg();
   const linkPaths = {
      link: `https://my-smartb.herokuapp.com/`,
      github: `https://github.com/initialsky0/Facial-Recognition-App-Project`
   }
   console.log(workImgsObj);
   return (
      <WorksDispContainer>
         <Card fluid={workImgsObj[`facial`]} linkPaths={linkPaths} />
      </WorksDispContainer>
   );
};

export default WorksDisplay;
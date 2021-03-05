import React, { useContext } from "react";
import { GlobalContext } from "../context/global-provider";
import Card from "./card";
import useWorksImg from "../hooks/useWorksImg";
import useWorkData from "../hooks/useWorkData";
import { WorksDispContainer } from "../styles/components/worksDisplay-styled";

const WorksDisplay = () => {
   const workImgsObj = useWorksImg();
   const workData = useWorkData();
   const { backgroundSelected } = useContext(GlobalContext)
   return (
      <WorksDispContainer numOfCards={workData.length} bgSelected={backgroundSelected}>
         {
            workData.map(({ frontmatter: { title, imgName, links }}, index) => 
               (<Card 
                  key={`card${index}`} 
                  fluid={workImgsObj[imgName]} 
                  title={title} 
                  linkPaths={links} 
               />)
            )
         }
      </WorksDispContainer>
   );
};

export default WorksDisplay;
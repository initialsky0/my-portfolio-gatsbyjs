import React from "react";
import { ATagContainer } from "../styles/components/aTag-styled";

const ATag = ({ href, onClick, children, className }) => (
   <ATagContainer 
      className={className}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={onClick}
   >
      {children}
   </ATagContainer>
);

export default ATag;
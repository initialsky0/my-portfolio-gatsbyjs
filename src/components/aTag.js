import React from "react";

const ATag = ({ href, onClick, children, className }) => (
   <a 
      className={className}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={onClick}
   >
      {children}
   </a>
);

export default ATag;
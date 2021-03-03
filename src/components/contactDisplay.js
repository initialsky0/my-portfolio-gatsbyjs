import React from "react";
import { StyledMailIcon, 
         StyledPhoneIcon, 
         StyledLinkedinIcon,
         StyledGithubIcon,
         StyledALink,
         StyledRegATag } from "../styles/components/svg-styled";
import { ContactDispContainer, 
         ContactItemLists } from "../styles/components/contactDisplay-styled";

const ContactDisplay = () => (
   <ContactDispContainer>
      <ContactItemLists>
         <StyledRegATag href={`mailto:initialsky.dev@gmail.com`} bgSelected={0}>
            <StyledMailIcon />
         </StyledRegATag>
         <StyledRegATag href={`tel:111-111-1111`} bgSelected={0}>
            <StyledPhoneIcon />
         </StyledRegATag>
         <StyledALink href={`https://github.com/initialsky0`} bgSelected={0}>
            <StyledGithubIcon />
         </StyledALink>
         <StyledALink href={`https://www.linkedin.com/in/dong-yu-b26b24113/`} bgSelected={0}>
            <StyledLinkedinIcon />
         </StyledALink>
      </ContactItemLists>
   </ContactDispContainer>
);

export default ContactDisplay;
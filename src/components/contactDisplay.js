import React, { useContext } from "react";
import { GlobalContext } from "../context/global-provider";
import useContactData from "../hooks/useContactData";
import { StyledMailIcon, 
         StyledPhoneIcon, 
         StyledLinkedinIcon,
         StyledGithubIcon,
         StyledALink,
         StyledRegATag } from "../styles/components/svg-styled";
import { ContactDispContainer, 
         ContactItemLists,
         ContactItemContainer } from "../styles/components/contactDisplay-styled";

const ContactDisplay = () => {
   const { contents } = useContactData();
   const { backgroundSelected } = useContext(GlobalContext);
   return (
      <ContactDispContainer>
         <ContactItemLists numOfContact={Object.keys(contents).length}>
            {
               `mail` in contents 
               ? (<ContactItemContainer>
                     <h4>mail</h4>
                     <StyledRegATag href={contents.mail} bgSelected={backgroundSelected}>
                        <StyledMailIcon />
                     </StyledRegATag>
                  </ContactItemContainer>)
               : null
            }
            {
               `phone` in contents 
               ? (<ContactItemContainer>
                     <h4>phone</h4>
                     <StyledRegATag href={contents.phone} bgSelected={backgroundSelected}>
                        <StyledPhoneIcon />
                     </StyledRegATag>
                  </ContactItemContainer>)
               : null
            }
            {
               `github` in contents
               ? (<ContactItemContainer>
                     <h4>github</h4>
                     <StyledALink href={contents.github} bgSelected={backgroundSelected}>
                        <StyledGithubIcon />
                     </StyledALink>
                  </ContactItemContainer>)
               : null
            }
            {
               `linkedin` in contents
               ? (<ContactItemContainer>
                     <h4>linkedin</h4>
                     <StyledALink href={contents.linkedin} bgSelected={backgroundSelected}>
                        <StyledLinkedinIcon />
                     </StyledALink>
                  </ContactItemContainer>)
               : null
            }
         </ContactItemLists>
      </ContactDispContainer>
   );
};

export default ContactDisplay;
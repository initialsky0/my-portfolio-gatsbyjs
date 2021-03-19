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

const getIcon = type => {
   switch(type) {
      case `mail`:
         return (<StyledMailIcon />);
      case `phone`:
         return (<StyledPhoneIcon />);
      case `github`:
         return (<StyledGithubIcon />);
      case `linkedin`:
         return (<StyledLinkedinIcon />);
      default:
         return null;
   };
};

const ContactDisplay = () => {
   const { contents } = useContactData();
   const contactTypes = Object.keys(contents);
   const { backgroundSelected } = useContext(GlobalContext);

   return (
      <ContactDispContainer bgSelected={backgroundSelected}>
         <ContactItemLists numOfContact={contactTypes.length}>
            {
               contactTypes.map(type => (
                  contents[type] 
                  ? 
                     <ContactItemContainer key={`contact-${type}`}>
                        <h4>{type}</h4>
                        { 
                           // check for the correct a tag component for corresponding contact type
                           type === `mail` || type === `phone` 
                              ?  <StyledRegATag href={contents[type]} bgSelected={backgroundSelected}>
                                    {getIcon(type)}
                                 </StyledRegATag>
                              :  <StyledALink href={contents[type]} bgSelected={backgroundSelected}>
                                    {getIcon(type)}
                                 </StyledALink> 
                        }
                     </ContactItemContainer> 
                  :
                     null
               ))
            }
            
         </ContactItemLists>
      </ContactDispContainer>
   );
};

export default ContactDisplay;
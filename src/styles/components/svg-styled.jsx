import styled, { css } from "styled-components";
import ATag from "../../components/aTag";
import LinkIcon from "../../svg/link-solid.inline.svg";
import GithubIcon from "../../svg/github-brands.inline.svg";
import Mail from "../../svg/envelope-regular.inline.svg";
import Phone from "../../svg/phone-solid.inline.svg";
import Linkedin from "../../svg/linkedin-brands.inline.svg";

export const IconContainerStyle = css`
   width: ${({ iconSize }) => iconSize ? `${iconSize}px` : `45px`};
   height: ${({ iconSize }) => iconSize ? `${iconSize}px` : `45px`};
   padding: .3rem;
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   backface-visibility: hidden;
   transition: transform .2s;
   background-color: ${({ bgSelected }) => bgSelected === 0 ? `var(--secondary-color)` : `var(--tertiary-color)`};

   &:hover {
      transform: scale(1.15);
   }
`;

export const StyledLinkIcon = styled(LinkIcon)`
   color: var(--icon-light);
`;

export const StyledGithubIcon = styled(GithubIcon)`
   color: var(--icon-light);
`;

export const StyledMailIcon = styled(Mail)`
   color: var(--icon-light);
`;

export const StyledPhoneIcon = styled(Phone)`
   color: var(--icon-light);
`;

export const StyledLinkedinIcon = styled(Linkedin)`
   color: var(--icon-light);
`;

export const StyledALink = styled(ATag)`
   ${IconContainerStyle}

   svg {
      transition: color .2s;
   }

   &:hover {
      ${StyledGithubIcon} {
         color: var(--github-black);
      }

      ${StyledLinkIcon} {
         color: var(--link-blue);
      }

      ${StyledLinkedinIcon} {
         color: var(--linkedin-cyan);
      }
   }
`;

export const StyledRegATag = styled.a`
   ${IconContainerStyle}

   &:hover {
      ${StyledPhoneIcon} {
         color: var(--phone-green);
      }
   }

   &:hover {
      ${StyledMailIcon} {
         color: var(--github-black);
      }
   }
`
import styled, {css} from "styled-components";
import { glassyBackground } from "../styles/styled-utils";
import { bounceAnimation, 
         fadeInLeftAnimation, 
         slideDownAnimation } from "../styles/animation-styled";
import { Link } from "gatsby";

const getMaxLength = contents => (
   contents.reduce((acc, { navTitle }) => Math.max(acc, navTitle.length), 0)
);

const generateTextAnimation = (maxTextLength, element, animationName, duration, delay=0, extraProps=``) => {
   let animationStyles = ``;
   for(let i = 0; i < maxTextLength; i++) {
      const actualDelay = delay?.offset ? delay.offset + (i * delay.value) : i * delay;
      animationStyles += `
         ${element}:nth-child(${i+1}) {
            animation: ${animationName} ${duration}s linear ${actualDelay}s ${extraProps};
         }
      `
   }
   return css`${animationStyles}`;
}

export const NavbarLink = styled(Link)`
   text-decoration: none;
   letter-spacing: .04rem;
   color: black;
   padding: 1rem;
   font-size: 1.33rem;
   font-family: 'Roboto', sans-serif;
   font-weight: bold;
   text-transform: uppercase;
   backface-visibility: hidden;

   span {
      display: inline-block;
   }
`;

export const NavbarContainer = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: ${({headerHeight}) => headerHeight ? `${headerHeight}px` : `unset`};
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   ${glassyBackground}
   ${slideDownAnimation}
   animation: slide-down .2s ease-in;

   ${NavbarLink} {
      opacity: 0;
   }

   ${fadeInLeftAnimation}
   ${({ contents }) => 
      generateTextAnimation(
         contents.length, 
         NavbarLink, 
         `fade-in-from-left`, 
         .5, 
         {value: .1, offset: .3}, 
         `forwards`)
   }

   ${NavbarLink}:hover {
      ${bounceAnimation}
      ${({ contents }) => generateTextAnimation(getMaxLength(contents), `span`, `bounce`, .5, .05, `infinite`)}
   }
`;

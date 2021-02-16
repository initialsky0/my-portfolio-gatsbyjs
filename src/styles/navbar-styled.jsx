import styled, {css} from "styled-components";
import { glassyBackground, positionAbsOrigin } from "../styles/styled-utils";
import { MenuBtnContainer } from "../styles/menuBtn-styled";
import { bounceAnimation, 
         fadeInLeftAnimation, 
         slideDownAnimation,
         slideUpAnimation } from "../styles/animation-styled";
import { Link } from "gatsby";

const getMaxLength = contents => (
   contents.reduce((acc, { navTitle }) => Math.max(acc, navTitle.length), 0)
);

const generateTextAnimation = (maxTextLength, element, animationName, duration, delay=0, extraProps=``) => {
   let animationStyles = ``;
   for(let i = 0; i < maxTextLength; i++) {
      const actualDelay = delay?.offset ? delay.offset + (i * delay.value) : i * delay;
      animationStyles += `
         ${element}:nth-of-type(${i+1}) {
            animation: ${animationName} ${duration}s linear ${actualDelay}s ${extraProps};
         }
      `
   }
   return css`${animationStyles}`;
}

const slideUp = css`
   ${slideUpAnimation}
   animation: slide-up .2s ease-out forwards;
`;

const slideDown =css`
   ${slideDownAnimation}
   animation: slide-down .2s ease-in forwards;
`;

export const NavbarOverlay = styled.div`
   ${positionAbsOrigin}
   width: 100%;
   height: ${({headerHeight}) => headerHeight ? `${headerHeight}px` : `unset`};
   display: flex;
   justify-content: center;
   ${glassyBackground}
   ${({navState}) => navState ? slideDown : slideUp }
`;

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
   width: 960px;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   ${MenuBtnContainer} {
      margin-right: 1.0875rem;
   }

   ${NavbarLink} {
      opacity: 0;
   }

   ${fadeInLeftAnimation}
   ${({ contents, navState }) => 
      navState 
         ? generateTextAnimation(
            contents.length, NavbarLink, 
            `fade-in-from-left`, 
            .2, 
            {value: .1, offset: .3}, 
            `forwards`) 
         : ``
   }

   ${NavbarLink}:hover {
      ${bounceAnimation}
      ${({ contents }) => generateTextAnimation(getMaxLength(contents), `span`, `bounce`, .5, .05, `infinite`)}
   }
`;

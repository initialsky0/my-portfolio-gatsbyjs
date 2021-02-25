import styled, { css } from "styled-components";
import ATag from "../../components/aTag"
import { Link } from "gatsby";
import { positionAbsOrigin } from "../styled-utils";

const customBtnStyle = css`
   display: block;
   padding: .7rem 1rem;
   color: white;
   text-decoration: none;
   text-align: center;
   font-family: Roboto;
   font-size: 1.4rem;
`;

const btnContainerStyle = css`
   background-color: var(--secondary-color);
   border-radius: 10px;
   box-shadow: 0 5px 9px 2px rgba(0, 0, 0, .3);
`;

export const CustomBtnContainer = styled.div`
   position: relative;
   min-width: 8.3rem;
   ${btnContainerStyle}
   backface-visibility: hidden;
   transition: all .3s;
   transition-property: box-shadow, transform;

   &:hover {
      transform: scale(1.1) translateY(-.1rem);
      box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
   }

   &:active {
      transform: scale(.95) translateY(.1rem);
      box-shadow: 0 5px 5px 1px rgba(0, 0, 0, .3);
   }

   &::before {
      ${positionAbsOrigin}
      ${btnContainerStyle}
      z-index: -1;
      content: '';
      width: 100%;
      height: 100%;
      opacity: 0;
   }
`;

export const CustomBtnLink = styled(Link)`
   ${customBtnStyle}
`;

export const CustomBtnHyperLink = styled(ATag)`
   ${customBtnStyle}
`;
import styled, { css } from "styled-components";

export const aTagStyles = css`
   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 0;
      transition: all .3s ease-out;
   }

   &:hover::before {
      width: 100%;
   }
`;

export const ATagContainer = styled.a`
   position: relative;
   text-decoration: none;
`;
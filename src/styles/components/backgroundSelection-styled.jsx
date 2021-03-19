import styled, { css } from "styled-components";
import { selectBackgroundFilter } from "./slidingBackground-styled";

const activeBkgdFilter = css`
   background-color: var(--white-cloud);
   transform: scale(1.2);
`;

export const BkgdSelectorBox = styled.div`
   height: 1.4rem;
   width: 1.4rem;
   border-radius: 6px;
   box-shadow: 0 2px 5px 2px rgba(0, 0, 0, .3);
   transition: all .3s;
   ${({ backgroundNum }) => selectBackgroundFilter(backgroundNum)}
   cursor: pointer;

   &:hover {
      ${activeBkgdFilter}
   }
`;

export const BkgdSelectorContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 6.5rem;
   z-index: 1;

   &:hover > ${BkgdSelectorBox}:not(:hover) {
      transform: scale(1);
   }

   ${BkgdSelectorBox}:nth-of-type(${({backgroundNum}) => backgroundNum + 1}) {
      ${activeBkgdFilter}
   }
`;
import styled, { css } from "styled-components";

const cardBackgroundType1 = css`
   background-color: var(--primary-color);
   filter: brightness(1.1);
`;

const cardBackgroundType2 = css`
   background-color: var(--secondary-color);
   filter: brightness(1.3);
`;

const cardBackgroundType3 = css`
   box-shadow: 0 3px 10px rgba(255, 255, 255, .5);
   background-color: var(--tertiary-color);
`;

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 200px;
   height: 300px;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
   backface-visibility: hidden;
   transition: all .35s;
   transition-property: transform, box-shadow;
   ${({ bgSelected }) => bgSelected === 0 
      ? cardBackgroundType1 
      : bgSelected === 1
      ? cardBackgroundType2 
      : cardBackgroundType3
   }

   &:hover {
      transform: scale(1.05);
      ${({ bgSelected }) => bgSelected === 2 
         ? `box-shadow: 0 5px 15px rgba(255, 255, 255, .6);`
         : `box-shadow: 0 5px 15px rgba(0, 0, 0, .3);`
      }
   }

   img {
      padding: 0 .5rem;
   }
`;

export const CardTitle = styled.h4`
   margin: 1rem .5rem .5rem;
   text-align: center;
`;

export const CardBtnContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   height: 20%;
`;


import styled from "styled-components";

export const CustomBtnContainer = styled.div`
   padding: .6rem 1rem;
   background-color: var(--secondary-color);
   border-radius: 10px;
   box-shadow: 0 5px 8px 2px rgba(0, 0, 0, .3);
   backface-visibility: hidden;
   transition: all .3s;
   transition-property: box-shadow, transform;

   &:hover {
      transform: scale(1.05) translateY(-.1rem);
      box-shadow: 0 5px 10px 3px rgba(0, 0, 0, .4);
   }

   &:active {
      transform: scale(.95) translateY(.1rem);
      box-shadow: 0 5px 5px 1px rgba(0, 0, 0, .3);
   }
`;

export const CustomBtnLink = styled.a`
   color: white;
   text-decoration: none;
   font-family: Roboto;
   font-size: 1.5rem;
`;
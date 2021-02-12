import styled, {css} from "styled-components";
// 1rem = 18px

const menuIconStyles = css`
   width: 1.4rem;
   height: .167rem;
   background: #060606;
`;

// const menuBtnFixed = css`
//    position: absolute;
//    right: 2.2%;
//    top: 3.5%;
// `;

export const MenuBtnContainer = styled.div`
   cursor: pointer;
   height: 2.25rem;
   width: 2.25rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background-color: var(--white-cloud);
`;

export const MenuBtnStyles = styled.div`
   position: relative;
   ${menuIconStyles}
   ${({ navState }) => navState ? `` : `transform: rotate(45deg);`}
   
   &::before {
      position: absolute;
      content: '';
      ${menuIconStyles}
      top: -.5rem;
      ${({ navState }) => navState ? `opacity: 1;` : `opacity: 0;`}
   }

   &::after {
      position: absolute;
      content: '';
      ${menuIconStyles}
      top: .5rem;
      ${({ navState }) => 
         navState 
            ? `` 
            : `transform: rotate(-90deg);
               top: 0;`
      }
   }
`;
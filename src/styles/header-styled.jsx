import styled from 'styled-components';

export const HeaderStyled = styled.header`
   position: relative;
   margin-bottom: 1.45rem;

   &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      opacity: .7;
      z-index: -1;
   }
`;

export const HeaderContainer = styled.div`
   margin: 0 auto;
   max-width: 960px;
   padding: 1.45rem 1.0875rem;
   display: flex;
   justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
   margin: 0;
   user-select: none;
   transition: opacity .5s;
   ${({navState}) => navState 
      ? `opacity: 0;
         z-index: -1;` 
      : `opacity: 1;`
   }
   
   a {
      color: var(--white-cloud);
      text-decoration: none;
   }
`;
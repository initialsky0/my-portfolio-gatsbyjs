import { css } from "styled-components";

export const slidingBackgroundAnimation =css`
   @keyframes slide-background {
      from {
         transform: translate3d(0, 0, 0);
      }

      to {
         transform: translate3d(-50%, 0, 0);
      }
   }
`;

export const slideDownAnimation = css`
   @keyframes slide-down {
      from {
         display: flex;
         transform: translateY(-100%);
      }

      to {
         transform: translateY(0%);
      }
   }
`;

export const slideUpAnimation = css`
   @keyframes slide-up {
      from {
         transform: translateY(0%);
      }

      to {
         display: none;
         transform: translateY(-100%);
      }
   }
`;

export const showContent = css`
   @keyframes show-content {
      from {
         visibility: hidden;
      }
      to {
         visibility: visible;
      }
   }
`;

export const fadeIn = css`
   @keyframes fade-in {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }
   }
`;

export const fadeInLeftAnimation = css`
   @keyframes fade-in-from-left {
      from {
         opacity: 0;
         transform: translateX(-20%);
      }

      to {
         opacity: 1;
         transform: translateX(0%);
      }
   }
`;

export const fadeInRightAnimation = css`
   @keyframes fade-in-from-right {
      from {
         opacity: 0;
         transform: translateX(20%);
      }

      to {
         opacity: 1;
         transform: translateX(0%);
      }
   }
`;

export const fadeInTopAnimation = css`
   @keyframes fade-in-from-top {
      from {
         opacity: 0;
         transform: translateY(-10%);
      }

      to {
         opacity: 1;
         transform: translateY(0%);
      }
   }
`;

export const fadeInBottomAnimation = css`
   @keyframes fade-in-from-bottom {
      from {
         opacity: 0;
         transform: translateY(10%);
      }

      to {
         opacity: 1;
         transform: translateY(0%);
      }
   }
`;

export const bounceAnimation = css`
   @keyframes bounce {
      0% {
         transform: translateY(0%) scale(1, 1);
      }
      40% {
         transform: translateY(-30%) scale(.9, 1.15);
      }
      90% {
         transform: translateY(0%) scale(1.1, .85);
      }
      100% {
         transform: translateY(0%) scale(1, 1);
      }
   }
`;
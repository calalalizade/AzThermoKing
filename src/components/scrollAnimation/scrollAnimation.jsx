import { keyframes } from "@emotion/react";

export default {
  // FADE
  fadeInRight: keyframes`
      from {
        opacity: 0;
        transform: translateX(100px);
      }
    
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,

  fadeInLeft: keyframes`
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `,

  fadeInDown: keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
    }
    
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      `,

  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    `,

  // SLIDE
  slideInLeft: keyframes`
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
    `,

  // SLIDE
  zoomIn: keyframes`
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
    `,

  // BOUNCE
  bounceInRight: keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0) scaleX(3);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0) scaleX(1);
    }
    75% {
      transform: translate3d(10px, 0, 0) scaleX(0.98);
    }
    90% {
      transform: translate3d(-5px, 0, 0) scaleX(0.995);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
    `,
  bounceInLeft: keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0) scaleX(3);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0) scaleX(1);
    }
    75% {
      transform: translate3d(-10px, 0, 0) scaleX(0.98);
    }
    90% {
      transform: translate3d(5px, 0, 0) scaleX(0.995);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
    `,

  // FLIP
  flipInX: keyframes`
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
  
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
  
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
  
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
  
    to {
      transform: perspective(400px);
    }
    `,
};

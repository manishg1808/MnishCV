import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading-text">LOADING</div>
      <div className="cube div">
        <div className="top div" />
        <div className="div">
          <span className="span" style={{'--i': 0}}>
            <p>Mnish.G</p>
            <p>CV</p>
          </span>
          <span className="span" style={{'--i': 1}}>
            <p>loading..</p>
            <p>loading..</p>
          </span>
          <span className="span" style={{'--i': 2}}>
            <p>CV</p>
            <p>
            Mnish.G
            </p>
          </span>
          <span className="span" style={{'--i': 3}}>
            <p>loading..</p>
            <p>RESUME</p>
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;

  .loading-text {
    font-size: 2.5rem;
    font-weight: bold;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 40px #00ff00,
      0 0 80px #00ff00;
    margin-bottom: 50px;
    animation: loadingPulse 1.5s ease-in-out infinite;
    letter-spacing: 6px;
    text-align: center;
    position: relative;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .loading-text {
      font-size: 2rem !important;
      letter-spacing: 4px !important;
      margin-bottom: 30px !important;
    }
  }

  @media (max-width: 480px) {
    .loading-text {
      font-size: 1.2rem !important;
      letter-spacing: 2px !important;
      margin-bottom: 15px !important;
    }
  }

  @media (max-width: 360px) {
    .loading-text {
      font-size: 1rem !important;
      letter-spacing: 1px !important;
      margin-bottom: 10px !important;
    }
  }

  @keyframes loadingPulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
      text-shadow: 
        0 0 10px #00ff00,
        0 0 20px #00ff00,
        0 0 40px #00ff00,
        0 0 80px #00ff00;
    }
    50% {
      opacity: 0.8;
      transform: scale(1.02);
      text-shadow: 
        0 0 20px #00ff00,
        0 0 40px #00ff00,
        0 0 80px #00ff00,
        0 0 120px #00ff00;
    }
  }

  .cube {
    position: relative;
    height: 250px;
    width: 250px;
    transform-style: preserve-3d;
    animation: animate 6s linear infinite;
    margin-top: 20px;
  }

  /* Responsive Cube */
  @media (max-width: 768px) {
    .cube {
      height: 200px !important;
      width: 200px !important;
    }
  }

  @media (max-width: 480px) {
    .cube {
      height: 120px !important;
      width: 120px !important;
    }
  }

  @media (max-width: 360px) {
    .cube {
      height: 100px !important;
      width: 100px !important;
    }
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }

    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube .div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube .div .span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(125px);
    background-image: linear-gradient(
      -45deg,
      #000000,
      #13273f,
      #0d1729,
      #6a6a8d);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
  }

  /* Responsive Cube Faces */
  @media (max-width: 768px) {
    .cube .div .span {
      transform: rotateY(calc(90deg * var(--i))) translateZ(100px) !important;
    }
  }

  @media (max-width: 480px) {
    .cube .div .span {
      transform: rotateY(calc(90deg * var(--i))) translateZ(60px) !important;
    }
  }

  @media (max-width: 360px) {
    .cube .div .span {
      transform: rotateY(calc(90deg * var(--i))) translateZ(50px) !important;
    }
  }

  .cube .div .span p {
    position: absolute;
    font-size: 1.5em;
    color: #00ff00;
    transform: translateZ(50px);
    font-family: 'Courier New', monospace;
    font-weight: bold;
    text-shadow: 0 0 15px #00ff00;
  }

  /* Responsive Text */
  @media (max-width: 768px) {
    .cube .div .span p {
      font-size: 1.2em !important;
      transform: translateZ(40px) !important;
    }
  }

  @media (max-width: 480px) {
    .cube .div .span p {
      font-size: 0.8em !important;
      transform: translateZ(25px) !important;
    }
  }

  @media (max-width: 360px) {
    .cube .div .span p {
      font-size: 0.6em !important;
      transform: translateZ(20px) !important;
    }
  }

  .cube .div .span p:nth-child(1) {
    transform: translateZ(0) translateY(50px);
    color: rgba(0, 255, 0, 0.2);
    filter: blur(1px);
  }

  /* Responsive Shadow Text */
  @media (max-width: 768px) {
    .cube .div .span p:nth-child(1) {
      transform: translateZ(0) translateY(40px) !important;
    }
  }

  @media (max-width: 480px) {
    .cube .div .span p:nth-child(1) {
      transform: translateZ(0) translateY(20px) !important;
    }
  }

  @media (max-width: 360px) {
    .cube .div .span p:nth-child(1) {
      transform: translateZ(0) translateY(15px) !important;
    }
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
    background-image: linear-gradient(
      -45deg,
      #000000,
      #13273f,
      #0d1729,
      #6a6a8d);
    transform: rotateX(90deg) translateZ(125px);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
  }

  /* Responsive Top Face */
  @media (max-width: 768px) {
    .top {
      width: 200px !important;
      height: 200px !important;
      transform: rotateX(90deg) translateZ(100px) !important;
    }
  }

  @media (max-width: 480px) {
    .top {
      width: 120px !important;
      height: 120px !important;
      transform: rotateX(90deg) translateZ(60px) !important;
    }
  }

  @media (max-width: 360px) {
    .top {
      width: 100px !important;
      height: 100px !important;
      transform: rotateX(90deg) translateZ(50px) !important;
    }
  }

  .top::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
    background-image: linear-gradient(
      -45deg,
      #000000,
      #0d0d0e,
      #030303,
      #000000);
    background-size: 1200% 1200%;
    animation: AnimationName 30s ease infinite;
    box-shadow: 0 0 100px #00ff00, 0 0 150px #00ff00, 0 0 200px #00ff00;
    transition: box-shadow 3s;
    transform: translateZ(-250px);
    filter: blur(40px);
  }

  /* Responsive Shadow */
  @media (max-width: 768px) {
    .top::before {
      width: 200px !important;
      height: 200px !important;
      transform: translateZ(-200px) !important;
      box-shadow: 0 0 80px #00ff00, 0 0 120px #00ff00, 0 0 160px #00ff00 !important;
    }
  }

  @media (max-width: 480px) {
    .top::before {
      width: 120px !important;
      height: 120px !important;
      transform: translateZ(-120px) !important;
      box-shadow: 0 0 40px #00ff00, 0 0 60px #00ff00, 0 0 80px #00ff00 !important;
    }
  }

  @media (max-width: 360px) {
    .top::before {
      width: 100px !important;
      height: 100px !important;
      transform: translateZ(-100px) !important;
      box-shadow: 0 0 30px #00ff00, 0 0 45px #00ff00, 0 0 60px #00ff00 !important;
    }
  }

  @keyframes AnimationName2 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Loader;

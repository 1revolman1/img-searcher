import styled from "styled-components";
export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 20%;
  &.bigShow {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    max-width: inherit;
    background: rgba(0, 0, 0, 0.3);
    .overlay {
      width: 70%;
      height: 70%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .opened {
      transition: none;
      opacity: 1;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: initial;
    }
    img {
      width: 70%;
      height: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledInformation = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s linear;
  transition: background-color 0.5s linear;
  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
export const StyledExpand = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  img {
    width: 100%;
    object-fit: cover;
  }
  &.expanded {
    width: 50px;
    height: 50px;
  }
`;
export const StyledInfavourite = styled.div`
  position: relative;
  &.closed {
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: translate(-50%, -50%) rotate(-90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: translate(-50%, -50%) rotate(-90deg);
      opacity: 1;
    }
  }
  &.opened {
    opacity: 1;
    .vertical {
      transition: all 0.5s ease-in-out;
      transform: translate(-50%, -50%) rotate(90deg);
    }
    .horizontal {
      transition: all 0.5s ease-in-out;
      transform: translate(-50%, -50%) rotate(90deg);
      opacity: 0;
    }
  }

  .circle {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    .horizontal {
      position: absolute;
      background-color: red;
      width: 15px;
      height: 5px;
      left: 50%;
      top: 50%;
    }
    .vertical {
      position: absolute;
      background-color: red;
      width: 5px;
      height: 15px;
      left: 50%;
      top: 50%;
    }
  }
`;

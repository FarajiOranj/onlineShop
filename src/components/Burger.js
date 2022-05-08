import React, { useState } from "react";
import styled from "styled-components";

//* Navbar
import Navbar from "./Navbar";

//* Hamburgur Menu
const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 30px;
  top: 40px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${(props) => (props.isOpen ? "#fff" : "#3d56dd")};
      border-radius: 2px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${(props) =>
          props.isOpen ? "translateX(-100%)" : "translateX(0)"};
        opacity: ${(props) => (props.isOpen ? 0 : 1)};
        visibility: ${(props) => (props.isOpen ? "hidden" : "visible")};
      }
      &:nth-child(3) {
        transform: ${(props) =>
          props.isOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Div isOpen={open} onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <Navbar isOpen={open} />
    </>
  );
};

export default Burger;

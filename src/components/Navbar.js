import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//* Components
import ItemCounter from "./ItemCounter";

const Ul = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  background: linear-gradient(to bottom right, #333333, #121212);
  margin: 0;
  z-index: 15;

  .shop-cart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style-type: none;
    padding: 1.5em;
  }

  li a {
    position: relative;
    color: #ffffff;
    text-shadow: 1px 1px 2px #000;
    display: block;
    font-weight: 600;
    font-family: Georgia, "Times New Roman", Times, serif;
    transition: all 0.3s;
  }

  li:nth-child(1) a::before,
  li:nth-child(2) a::before,
  li:nth-child(3) a::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #f9f9f9;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }

  li:nth-child(1) a:hover::before,
  li:nth-child(2) a:hover::before,
  li:nth-child(3) a:hover::before,
  li:nth-child(1) a:focus::before,
  li:nth-child(2) a:focus::before,
  li:nth-child(3) a:focus::before {
    transform-origin: left top;
    transform: scale(1, 1);
    
  }

  li a:hover {
    color: rgb(29, 24, 23);
    text-shadow: 1px 1px 2.5px #fff, -1px -1px 2.5px #fff, 1px -1px 2.5px #fff,
      -1px 1px 2.5px #fff;
    transform: scale(1.1) translate(5%);
  }

  li:nth-child(1) {
    margin-left: 8.6em;
  }

  li:nth-child(4) a:hover {
    color: black;
    text-shadow: 1px 1px 1px #f9f9f9, -1px -1px 1px #f9f9f9,
      -1px 1px 1px #f9f9f9, 1px -1px 1px #f9f9f9;
    transform: scale(1.1);
  }

  li:nth-child(3) a:hover {
    color: black;
    text-shadow: 1px 1px 2px #f9f9f9, -1px -1px 2px #f9f9f9,
      -1px 1px 2px #f9f9f9, 1px -1px 2px #f9f9f9;
    transform: scale(1.1);
  }

  li:nth-child(4) {
    display: block;
    position: absolute;
    right: 12px;
    color: #fff;
    margin-right: 7.8em;
  }

  li:nth-child(5) {
    position: absolute;
    right: 15.5em;
  }

  li:nth-child(5) a:hover {
    transform: scale(1) translate(0%);
  }
  li div {
    display: flex;
    height: 19px;
  }

  li div a {
    font-size: 12px;
  }
  li div a:nth-child(1) {
    margin-right: 0.5em;
  }

  li div a:nth-child(2) {
    margin-left: 0.5em;
  }
  @media (max-width: 1200px) {
    li:nth-child(1) {
      margin-left: 4.3em;
    }
    li:nth-child(4) {
      margin-right: 3.5em;
    }

    li:nth-child(5) {
      right: 11.7em;
    }
  }
  
  @media (max-width: 768px) {

    li a {
      width: fit-content;
    }

    li a:hover {
      transform: scale(1.1);
    }
    background-color: #3d56dd;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    flex-direction: column;
    width: 300px;
    transform: ${(props) => (props.open ? "translate(0)" : "translate(100%)")};
    transition: all 0.3s linear;
    li:nth-child(1) {
      margin-top: 6rem;
      margin-left: 2rem;
    }

    li:nth-child(4) {
      position: absolute;
      right: 10px;
      bottom: 3rem;
      margin-left: 0;
    }

    li:nth-child(5) {
      position: absolute;
      right: 190px;
      bottom: 3rem;
    }

    li {
      margin-left: 2rem;
    }

    li a {
      color: #fff;
      text-shadow: 1px 1px 1px #000;
    }
  }

  li div a:nth-child(1) {
    margin-right: 0.8em;
  }

  li div a:nth-child(2) {
    margin-left: 0.8em;
  }

  li div a {
    height: 0px;
  }
`;

const Navbar = ({ isOpen }) => {
  return (
    <>
      <Ul open={isOpen}>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutMe</Link>
        </li>
        <li>
          <div>
            <Link to="/login">Login</Link>/<Link to="/signup">SignUp</Link>
          </div>
        </li>
        <li>
          <div className="shop-cart">
            <ItemCounter />
          </div>
        </li>
      </Ul>
    </>
  );
};

export default Navbar;

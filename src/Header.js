import React, { Fragment } from "react";
import "./Header.module.css";
import ButtonCart from "./ButtonCart";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Medical Store</h1>
        <ButtonCart onClick={props.onShowCart} />
      </header>
      <div></div>
    </Fragment>
  );
};

export default Header;

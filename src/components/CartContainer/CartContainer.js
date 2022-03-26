import ReactDOM from "react-dom";
import React from "react";
import "./CartContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoffee } from "@fortawesome/free-solid-svg-icons";

const CartContainer = ({ gun, addCartDetail }) => {
  // console.log(props)
  const { name, price, img } = gun;
  return (
    <div className="cart">
      <img src={img} alt="img" />
      <div className="cart-info">
        <h3>{name}</h3>
        <h1>${price}</h1>
        <button onClick={() => addCartDetail(gun)} className="cart-btn">
          Add to Choice List
          <FontAwesomeIcon
            className="icon"
            icon={faCartShopping}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default CartContainer;

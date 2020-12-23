import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "../../AppState/AppState";
import "./cart.styles.css";

export interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const containerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <AppStateContext.Consumer>
      {(state) => {
        const itemCount = state.cart.items.reduce((sum, item) => {
          return sum + item.quantity;
        }, 0);
        return (
          <div className="cartContainer" ref={containerRef}>
            <button className="button" type="button" onClick={handleClick}>
              <FiShoppingCart />
              <span>{itemCount} pizza(s)</span>
            </button>
            <div
              className="cartDropDown"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <ul>
                {state.cart.items.map((item) => (
                  <div>
                    <li key={item.id}>
                      {item.name} &times;{item.quantity}
                    </li>
                  </div>
                ))}
              </ul>
              <Link className="checkout" to="/Checkout">
                CHECKOUT
              </Link>
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Cart;

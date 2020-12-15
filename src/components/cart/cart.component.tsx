import React, { createRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./cart.styles.css";
import { AppStateContext } from "../../AppState/AppState";
import { useDeleteFromCart } from "../../hooks/AddToCart";

export interface CartProps {}

export interface CartState {
  isOpen: boolean;
}

class Cart extends React.Component<CartProps, CartState> {
  #containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: CartProps) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.#containerRef = createRef();
  }

  handleOutsideClick = (e: MouseEvent) => {
    if (
      this.#containerRef.current &&
      !this.#containerRef.current.contains(e.target as Node)
    ) {
      this.setState({
        isOpen: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div className="cartContainer" ref={this.#containerRef}>
              <button
                className="button"
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemCount} pizza(s)</span>
              </button>
              <div
                className="cartDropDown"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => (
                    <li key={item.id}>
                      {item.name} &times;{item.quantity}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;

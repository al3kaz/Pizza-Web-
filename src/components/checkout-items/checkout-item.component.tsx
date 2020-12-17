import React from "react";
import { CartItem } from "../../AppState/AppState";
import "./checkout-item.styles.css";

export interface CheckoutItemProps {
  pizza: CartItem;
  delete: () => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = (
  props: CheckoutItemProps
) => {
  return (
    <div key={props.pizza.id} className="checkout-header-container">
      <span className="checkout-block-container">{props.pizza.name}</span>
      <span className="checkout-block-container">
        &times;{props.pizza.quantity}
      </span>
      <span className="checkout-block-container">
        {props.pizza.price * props.pizza.quantity}
      </span>
      <button onClick={props.delete}>remove</button>
    </div>
  );
};

export default CheckoutItem;

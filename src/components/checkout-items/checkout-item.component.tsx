import React from "react";
import { CartItem } from "../../AppState/AppState";
import { useAddToCart } from "../../hooks/AddToCart";
import { useSubtractFromCart } from "../../hooks/SubtractFromCart";
import CustomButton from "../custom-button/custom-button.component";
import "./checkout-item.styles.css";

export interface CheckoutItemProps {
  pizza: CartItem;
  delete: () => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = (props) => {
  const addToCart = useAddToCart();
  const subtractFromCart = useSubtractFromCart();
  const handleAddToCart = () => {
    addToCart({
      id: props.pizza.id,
      name: props.pizza.name,
      price: props.pizza.price,
    });
  };

  const handleSubtract = () => {
    subtractFromCart({
      id: props.pizza.id,
      name: props.pizza.name,
      price: props.pizza.price,
    });
  };

  return (
    <div key={props.pizza.id} className="checkout-header-container">
      <span className="checkout-block-container">{props.pizza.name}</span>
      <span className="checkout-block-container">
        <div onClick={handleSubtract}>&#10094;</div>
        &times;{props.pizza.quantity}
        <div onClick={handleAddToCart}>&#10095;</div>
      </span>
      <span className="checkout-block-container">
        {(props.pizza.price * props.pizza.quantity).toFixed(2)}
      </span>
      <span className="checkout-block-container">
        <CustomButton onClick={props.delete}>&times;</CustomButton>
      </span>
    </div>
  );
};

export default CheckoutItem;

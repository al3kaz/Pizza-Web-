import React from "react";
import { useAddToCart } from "../../hooks/AddToCart";
import { Pizza } from "../../types";
import CustomButton from "../custom-button/custom-button.component";
import "./pizza.styles.css";

export interface PizzaProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaProps> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCart = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <ul className="pizza-container">
      <li>
        <h2 className="pizza-title">{pizza.name}</h2>
        <p className="pizza-name">{pizza.description}</p>
        <p>{pizza.price}</p>
      </li>
      <CustomButton type="button" onClick={handleAddToCart}>
        Add to Cart
      </CustomButton>
    </ul>
  );
};

export default PizzaItem;

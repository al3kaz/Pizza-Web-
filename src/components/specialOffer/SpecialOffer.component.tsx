import React from "react";
import { useAddToCart } from "../../hooks/AddToCart";
import { Pizza } from "../../types";
import CustomButton from "../custom-button/custom-button.component";

import "./SpecialOffer.styles.css";

export interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCart = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  return (
    <div className="pizza-special-container">
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>special price: {pizza.price}</p>
      <CustomButton type="button" onClick={handleAddToCart}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default SpecialOffer;

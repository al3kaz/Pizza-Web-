import React from "react";
import { useAddToCart } from "../../hooks/AddToCart";
import { Pizza } from "../../types";

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
    <div className="container">
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default SpecialOffer;

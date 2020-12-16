import React from "react";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";
import { useAddToCart } from "../../hooks/AddToCart";
import { Pizza } from "../../types";
import "./pizza.styles.css";

export interface PizzaProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaProps> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCart = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  const deleteFromCart = useDeleteFromCart();
  const handleDeleteFromCart = () => {
    deleteFromCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <div className="pizza-container">
      <li>
        <h2 className="pizza-title">{pizza.name}</h2>
        <p className="pizza-name">{pizza.description}</p>
        <p>{pizza.price}</p>
      </li>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button type="button" onClick={handleDeleteFromCart}>
        delete
      </button>
    </div>
  );
};

export default PizzaItem;

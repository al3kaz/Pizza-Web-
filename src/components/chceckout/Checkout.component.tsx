import React from "react";
import "./Checkout.styles.css";
import { AppStateContext } from "../../AppState/AppState";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";
import CheckoutItem from "../checkout-items/checkout-item.component";

export interface CheckOutListProps {}

const CheckoutList: React.FC<CheckOutListProps> = () => {
  const deleteFromCart = useDeleteFromCart();
  return (
    <div>
      <AppStateContext.Consumer>
        {(state) => {
          return (
            <div className="checkout-container">
              <div className="checkout-header-container">
                <div className="checkout-block-container">
                  <span>Product</span>
                </div>
                <div className="checkout-block-container">
                  <span>Quantity</span>
                </div>
                <div className="checkout-block-container">
                  <span>Price</span>
                </div>
                <div className="checkout-block-container">
                  <span>Remove</span>
                </div>
              </div>
              {state.cart.items.map((pizza) => {
                const handleDeleteFromCart = () => {
                  deleteFromCart({
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                  });
                };
                return (
                  <CheckoutItem pizza={pizza} delete={handleDeleteFromCart} />
                );
              })}
            </div>
          );
        }}
      </AppStateContext.Consumer>
      <div className="form">
        <h1>dane kontaktowe</h1>
        <form action="">
          <div>
            <label htmlFor="">name </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">phone </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">price </label>
            <input type="text" />
          </div>
        </form>
        <h2>deliver adress</h2>
      </div>
    </div>
  );
};

export default CheckoutList;

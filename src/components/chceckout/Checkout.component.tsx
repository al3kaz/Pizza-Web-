import React from "react";
import { AppStateContext } from "../../AppState/AppState";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";
import CheckoutItem from "../checkout-items/checkout-item.component";
import FormOrder from "../form-order/form-order.component";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Checkout.styles.css";

export interface CheckOutListProps {}

const CheckoutList: React.FC<CheckOutListProps> = () => {
  const deleteFromCart = useDeleteFromCart();

  return (
    <div>
      <AppStateContext.Consumer>
        {(state) => {
          const CartTotal = state.cart.items.reduce(
            (accumulatedQuantity, cartItem) =>
              accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
          );

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
              <div className="checkout-total-count">
                Total price : {CartTotal.toFixed(2)}
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
      <FormOrder />
      <Link to="./" className="checkout-button">
        <IoReturnUpBack />
      </Link>
    </div>
  );
};

export default CheckoutList;

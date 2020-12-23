import React from "react";
import { Link } from "react-router-dom";
import { AppStateContext, TotalCount } from "../../AppState/AppState";
import { useDeleteFromCart } from "../../hooks/DeleteFromCart";
import { IoReturnUpBack } from "react-icons/io5";
import CheckoutItem from "../../components/checkout-items/checkout-item.component";
import FormOrder from "../../components/form-order/form-order.component";
import "./Checkout.styles.css";

export interface CheckOutListProps {}

const CheckoutList: React.FC<CheckOutListProps> = () => {
  const deleteFromCart = useDeleteFromCart();
  const count = TotalCount();
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
              <div className="checkout-total-count">
                Total price : {count.toFixed(2)}
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

import React from "react";
import { AppStateContext } from "../../AppState/AppState";
import CustomButton from "../custom-button/custom-button.component";
import "./summary.styles.css";

export interface SummaryProps {
  close: (event: React.FormEvent<HTMLFormElement> | any) => void;
  orderInfo: {
    name: string;
    phone: string;
    email: string;
    street: string;
    houseNumber: string;
    postcode: string;
    city: string;
  };
}

const Summary: React.FC<SummaryProps> = ({ close, orderInfo }) => {
  return (
    <AppStateContext.Consumer>
      {(state) => {
        const CartTotal = state.cart.items.reduce(
          (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price,
          0
        );
        const { name, phone, street, houseNumber, postcode, city } = orderInfo;
        return (
          <div className="summary-container">
            <div className="summary">
              <ul>
                {state.cart.items.map((item) => (
                  <li key={item.id}>
                    {item.name} &times;{item.quantity}
                  </li>
                ))}
              </ul>
              <div className="summary-price">price: {CartTotal}</div>
              <div>
                <h3>Adress</h3>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{street}</p>
                <p>{houseNumber}</p>
                <p>{city}</p>
                <p>{postcode}</p>
              </div>
            </div>
            <CustomButton style={{ marginBottom: "5px" }}>pay</CustomButton>
            <CustomButton onClick={close}>back to checkout</CustomButton>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Summary;

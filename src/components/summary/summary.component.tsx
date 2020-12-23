import React from "react";
import { AppStateContext, TotalCount } from "../../AppState/AppState";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";
import "./summary.styles.css";

export interface SummaryProps {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
  const count = TotalCount();
  return (
    <AppStateContext.Consumer>
      {(state) => {
        const { name, phone, street, houseNumber, postcode, city } = orderInfo;
        return (
          <div onClick={close} className="summary-container">
            <div className="summary">
              <p>{name}</p>
              <p>{phone}</p>
              <ul>
                {state.cart.items.map((item) => (
                  <li key={item.id}>
                    {item.name} &times;{item.quantity}
                  </li>
                ))}
              </ul>
              <div className="summary-price">total: {count}</div>
              <div>
                <h3 className="summary-title">Adress</h3>
                <p>{street}</p>
                <p>{houseNumber}</p>
                <p>{city}</p>
                <p>{postcode}</p>
              </div>
            </div>
            <StripeCheckoutButton>pay</StripeCheckoutButton>
            <p>
              *Please use the following test credit card for payments*
              <br />
              4242 4242 4242 4242 - Exp: 12/21 - CVV: 123
            </p>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Summary;

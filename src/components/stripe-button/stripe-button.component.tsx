import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { TotalCount } from "../../AppState/AppState";

interface StripeCheckoutButtonProsp {}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProsp> = () => {
  const count = TotalCount();
  const priceForStripe = count * 100;
  const publishableKey =
    "pk_test_51HZZBTJ8BGCRIjuTy1Ov9XeTsZSCjXOhkHjK3fB4sHFXA6Du6QnIBnbApVNJB3TC2ckWtRA2RkQMTxEp8twAdOs900hUsK1nwD";
  const onToken = (token: any) => {
    console.log(token);
    alert("Payments successful");
  };

  return (
    <StripeCheckout
      name="Delicious Pizza"
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total is ${count}`}
      amount={priceForStripe}
      panelLabel="PayNow"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

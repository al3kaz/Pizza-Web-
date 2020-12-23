import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import Summary from "../summary/summary.component";

import "./form-order.styles.css";

export interface FormOrderProps {}

const FormOrder: React.FC<FormOrderProps> = () => {
  const [summary, setSummary] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    street: "",
    houseNumber: "",
    postcode: "",
    city: "",
  });

  const {
    name,
    phone,
    email,
    street,
    houseNumber,
    postcode,
    city,
  } = userCredentials;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSummary(!summary);
  };
  console.log(userCredentials);
  return (
    <div className="user-info-form">
      <h2>Contact info and delivery adress</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="">NAME </label>
          <input
            name="name"
            type="text"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">PHONE </label>
          <input
            name="phone"
            type="tel"
            value={phone}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">EMAIL </label>
          <input
            name="email"
            type="email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">STREET</label>
          <input
            name="street"
            type="text"
            value={street}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">HOUSE NUMBER</label>
          <input
            name="houseNumber"
            type="number"
            value={houseNumber}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">POSTCODE</label>
          <input
            name="postcode"
            type="postal"
            value={postcode}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="">CITY</label>
          <input
            name="city"
            type="text"
            value={city}
            required
            onChange={handleChange}
          />
        </div>
        <CustomButton type="submit">submit</CustomButton>
      </form>
      {summary && <Summary close={handleSubmit} orderInfo={userCredentials} />}
    </div>
  );
};

export default FormOrder;

import React from "react";
import pizzas from "./data/pizzas.json";
import { ReactComponent as Logo } from "./logo/pizza.svg";
import "./App.css";

import Pizza from "./components/pizza/pizza.component";
import Cart from "./components/cart/cart.component";
import AppStateProvider from "./AppState/AppState";
import SpecialOffer from "./components/specialOffer/SpecialOffer.component";

function App() {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className="App-container">
        <div className="header">
          <Logo width={120} height={120} />
          <div className="siteTitle">Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className="pizzaList">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
}

export default App;

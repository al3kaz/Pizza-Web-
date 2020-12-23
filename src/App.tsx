import React from "react";
import { Route, Switch } from "react-router-dom";
import AppStateProvider from "./AppState/AppState";

import "./App.css";
import HomePage from "./Pages/homePage/homePage.component";
import CheckoutList from "./Pages/chceckout/Checkout.component";

function App() {
  return (
    <AppStateProvider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Checkout" component={CheckoutList} />
      </Switch>
    </AppStateProvider>
  );
}

export default App;

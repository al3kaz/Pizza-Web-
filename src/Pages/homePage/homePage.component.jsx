import React from "react";
import pizzas from "../../data/pizzas.json";
import { ReactComponent as Logo } from "../../logo/pizza.svg";
import "./homePage.styles.css";

import Pizza from "../../components/pizza/pizza.component";
import Cart from "../../components/cart/cart.component";
import SpecialOffer from "../../components/specialOffer/SpecialOffer.component";


const HomePage = () => {
   const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
   const regularOfferPizza = pizzas.filter((pizza) => !pizza.specialOffer);
   return (
      <div className="App-container">
         <div className="header">
            <Logo width={120} height={120} />
            <div className="siteTitle">Delicious Pizza</div>
            <Cart />
         </div>
         {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
         <ul className="pizzaList">
            {regularOfferPizza.map((pizza) => (
               <Pizza key={pizza.id} pizza={pizza} />
            ))}
         </ul>
      </div>
   );
}

export default HomePage;

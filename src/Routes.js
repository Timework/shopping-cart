import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Shopping from "./Shopping";

const Routes = () => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  function checkCart(id) {
    for (let i=0; i < cart.length; i++){
      if (cart[i][0] === id){
        return true;
      };
    };
    return false;
  };

  function updateCart(id, amounts) {
    let newCart = []
    for (let i=0; i < cart.length; i++){
      if (cart[i][0] === id){
        newCart.push([cart[i][0], (cart[i][1] + amounts), cart[i][2]])
      } else {
        newCart.push([cart[i][0], cart[i][1], cart[i][2]])
      };
    };
    setCart(cart => [...newCart]);
  };

  function addItem(id, amounts, price) {
    if (!checkCart(id)) {
      setCart(cart => [...cart, [id, parseInt(amounts), parseInt(price)]]);
    } else {
      updateCart(id, parseInt(amounts))
    };
  };

  function calculatePrice() {
    let total = 0
    let counter = 0
    for (let i=0; i<cart.length; i++){
      console.log(cart[i][1])
      total += (cart[i][1] * cart[i][2]);
      counter += cart[i][1]
    };
    console.log(counter)
    setPrice(total);
    setAmount(counter);
    console.log(amount)
  };

  useEffect(() => {
    calculatePrice()
  }, [cart]);




  return (
    <BrowserRouter>
      <Nav price={price} amount={amount}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shopping"
         render={(props) => (<Shopping {...props} addItem={addItem} /> )} 
         />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
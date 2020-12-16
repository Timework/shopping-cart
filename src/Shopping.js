import React, { useState, useEffect } from "react";
import Item from "./components/Item.js";
import uniqid from "uniqid";

const Shopping = (props) => {

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);

  const changeFirst = (e) => {
    setFirst(e.target.value);
  };

  const changeSecond = (e) => {
    setSecond(e.target.value);
  };

  const changeThird = (e) => {
    setThird(e.target.value);
  };

   const addFirst = () => {
     setFirst(parseInt(first) + 1);
   };

   const subFirst = () => {
     setFirst(parseInt(first) - 1);
   };

   const addSecond = () => {
    setSecond(parseInt(second) + 1);
  };

  const subSecond = () => {
    setSecond(parseInt(second) - 1);
  };

  const addThird = () => {
    setThird(parseInt(third) + 1);
  };

  const subThird = () => {
    setThird(parseInt(third) - 1);
  };



  const items = [
    {id: "1",
    img: <img className="item-img" src={"https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />,
    amount: first,
    change: changeFirst,
    price: 10,
    add: addFirst,
    sub: subFirst,
    },
    {id: "2",
    img: <img className="item-img" src={"https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />,
    amount: second,
    change: changeSecond,
    price: 20,
    add: addSecond,
    sub: subSecond,
    },
    {id: "3",
    img: <img className="item-img" src={"https://images.pexels.com/photos/880447/pexels-photo-880447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />,
    amount: third,
    change: changeThird,
    price: 30,
    add: addThird,
    sub: subThird,
    },
  ];

  return (
    <div>
      <h1>Items</h1>
      <div className="items-holder">
        {items.map((cart) => <Item key={uniqid()}
         id={cart.id}
         img={cart.img}
         change={cart.change}
         amount={cart.amount}
         addItem={props.addItem}
         price={cart.price}
         add={cart.add}
         sub={cart.sub} 
         />)}
      </div>
    </div>
  );
};

export default Shopping;
import React from 'react';


const Item = (props) => {
    return (
    <div>
        {props.img}
        <div>Price ${props.price}</div>
        <div>{props.amount}</div>
        <input id="input" type="number" value={props.amount} onChange={props.change} min="0"></input>
        <button type="button" onClick={function() {props.add()}}>+</button>
        <button type="button" onClick={function() {props.sub()}}>-</button>
        <button type="button" onClick={function() {props.addItem(props.id, props.amount, props.price)}}>Add to Cart</button>
    </div>
    );
};

export default Item;
import React from "react";
import { Link } from 'react-router-dom'
const Nav = (props) => {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="nav-link" to="/">
                    <li>Home</li>
                </Link>
                <Link className="nav-link" to="/shopping">
                    <li>Shopping-cart</li>
                </Link>
            <li> Price: {props.price} Amount: {props.amount} <button>Check out</button></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
import React from "react";
import { Link } from "react-router-dom";


const navBar=()=>{
    return(
        <nav>
        <ul className="esquerda">
            <li><Link to="/">Labecommerce do Marco Antonio</Link></li>
        </ul>
        <ul className="direita">
            <li><Link to="cart">
            <span className="shoppingCart"><h5>Carrinho</h5> <span className="cartCount">0</span> </span>
            </Link></li>
            
        </ul>   
        </nav>
        
    )

}

export default navBar;
import React, {createContext, useState} from "react";


import camisa from '../Assets/camisa.jpg';
import luva from '../Assets/luva.jpg';
import saco from '../Assets/saco.jpg';
import tenis from '../Assets/tenis.jpg';
import bola from '../Assets/bola.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id: 1, name: "camisa", image: camisa, price: 290},
        {id: 2, name: "luva", image: luva, price: 140},
        {id: 3, name: "saco", image: saco, price: 400},
        {id: 4, name: "tenis", image: tenis, price: 300},
        {id: 5, name: "bola", image: bola, price: 120}

    ])
    return(

        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
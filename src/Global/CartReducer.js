export  const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, qtd} = state; 
    let product;
    let index;
    let updatedPrice;
    let updatedQtd;
    switch(action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product = product.id === action.id);
            if(check){
                return state;
             } else {
                product = action.product;
                product['qtd'] =1;
                updatedQtd = qtd + 1;
                updatedPrice = totalPrice + product.price;
                return{shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, qtd: updatedQtd}
             }
             break;
             default:
             return state;
    }

}
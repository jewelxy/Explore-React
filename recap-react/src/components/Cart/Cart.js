import React from 'react';

const Cart = (props) => {
    const cart = props.atrCart;
    const total = cart.reduce((total,prdPrice) => total + prdPrice.price,0)
    //For Shipping Charge
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total>15){
        shipping = 4.99;
    }else if(total>0){
        shipping = 0;
    }
    //Number Formatting
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    //For Tax
    const tax = total/10;
    //Grand Total
    const grandTotal = total + shipping + tax;
    
    return (
        <div>
            <h1>Cart History {cart.length}</h1>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Charge: {shipping}</p>
            <p>VAT / TAX : {formatNumber(tax)}</p>
            <p>Total Price : {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;
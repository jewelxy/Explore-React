import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country) => sum + country.population,0); 
    return (
        <div>
            <h2>Added Country : {cart.length}</h2>
            <h4>Total Population : {totalPopulation}</h4>
        </div>
    );
};

export default Cart;
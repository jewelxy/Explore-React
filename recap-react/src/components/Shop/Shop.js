import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10); //For Showing Product
    const [cart,setCart] = useState([]); //For Adding Product on Cart
    
    const handleAddProduct = (atrProduct)=>{
        console.log('Product Added',atrProduct);
        const newCart = [...cart,atrProduct];
        setCart(newCart);
    }
    return (
        <div className="shop-container">

        <div className="product-container">
        {
products.map(product =>
                
           <Product 
           atrHandleAddProduct={handleAddProduct}
           atrProduct={product}
           
           ></Product>

            )
        }
            </div>
            <div className="cart-container">
                <Cart atrCart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;
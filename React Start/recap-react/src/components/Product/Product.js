import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.atrProduct);
    const { img, name, seller, price, stock } = props.atrProduct;
    return (
        <div className="Product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="productInformation">
                <div>
                    <h4>{name}</h4>
                    <p>by : <small>{seller}</small></p>
                    <p><strong>$</strong> {price}</p>
                    <p>Only {stock} left order soon</p>
                    <button
                    onClick={() => props.atrHandleAddProduct(props.atrProduct)} 
                    className="main-btn"
                    
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                </div>

                <div>
                    {props.atrProduct.features.img}
                </div>

            </div>

        </div>
    );
};

export default Product;
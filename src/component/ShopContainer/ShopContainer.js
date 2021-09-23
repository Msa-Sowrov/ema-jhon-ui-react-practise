import React from 'react';
import './ShopContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShopContainer = (props) => {
    // console.log(props)
    const {name, img,price, stoke, seller}=props.product
    return (
        <div className="product-container">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="title">
                <h3>{name}</h3>
                <p>only {stoke} left in stock - order soon</p>
                <p>by {seller}</p>
                <p>price : {price}</p>
                <button onClick={()=>props.addCart(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default ShopContainer;
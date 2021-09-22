import React from 'react';

const ShopContainer = (props) => {
    // console.log(props)
    const {name, img,price, stoke, seller}=props.product
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>only {stoke} left in stock - order soon</p>
                <p>by {seller}</p>
                <p>price : {price}</p>
            </div>
        </div>
    );
};

export default ShopContainer;
import React, { useEffect, useState } from 'react';
import ShopContainer from '../ShopContainer/ShopContainer';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=> setProduct(data))
    },[])

    function addCart(props){
        console.log(props)
    }
    return (
        <div className='main'>
          <div className="shop">
                <h1>product:</h1>
        {
            product.map(product=><ShopContainer
                addCart ={addCart}
                key={product.key} product={product}/>)
        }
          </div>
              <div className="shop-cart">
                  <h2>order list:</h2>
            </div>  
        </div>
    );
};

export default Shop;<h2>hello shoper</h2>
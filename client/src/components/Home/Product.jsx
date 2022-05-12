import React from 'react'
import "./product.css";

const Product = () => {
    return (
        <div className='product-section'>
            <h4>Upgrade your home | Amazon Brands & more</h4>
            <div className='product-grid'>
                <div className='product'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_2x._SY232_CB627276474_.jpg" alt='product1' />
                    <p>Smart LED TVs</p>
                </div>
                <div className='product'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Appliances_2x._SY232_CB627276474_.jpg" alt='product2' />
                    <p>Appliances</p>
                </div>
                <div className='product'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furniture_2x._SY232_CB627276484_.jpg" alt='product3' />
                    <p>Furniture</p>
                </div>
                <div className='product'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen2x._SY232_CB627276315_.jpg" alt='product4' />
                    <p>Kitchen Product</p>
                </div>
            </div>
            <span>Shop Now</span>
        </div>
    )
}

export default Product
import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import "./productlist.css"

const ProductList = () => {
    const { products } = useSelector((state) => state.productData);
    return (
        <div className='plist'>
            <h1>Bestsellers in Bags, Wallets and Luggage</h1>
            <div>
                {products.map((item) => {
                    return <Product key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}

export default ProductList
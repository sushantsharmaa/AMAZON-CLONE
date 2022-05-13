import React from 'react'
import "./product.css"

const Product = ({ url, title, price }) => {
    return (
        <div className='solo'>
            <div className='solo-img'>
                <img src={url} alt={title} />
            </div>
            <div className='solo-title'>
                <h6>{title}</h6>
                <p><span>₹ </span>{price}</p>
            </div>
        </div>
    )
}

export default Product
import React from 'react'

const Product = ({ detailUrl, title, price }) => {
    return (
        <div>
            <div>
                <img src={detailUrl} alt={title.shortTitle} />
            </div>
            <div>
                <h5>{title.shortTitle}</h5>
                <p>{price.mrp}</p>
            </div>
        </div>
    )
}

export default Product
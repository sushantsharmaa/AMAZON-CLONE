import React from 'react'
import "./card.css";

const Card = ({ id, title, image, name, tagline }) => {
    return (
        <div className='product-section'>
            <h5>{title}</h5>
            <div className='product-grid'>
                <div className='product'>
                    <img src={image[0]} alt={id} />
                    <p>{name[0]}</p>
                </div>
                <div className='product'>
                    <img src={image[1]} alt={id} />
                    <p>{name[1]}</p>
                </div>
                <div className='product'>
                    <img src={image[2]} alt={id} />
                    <p>{name[2].substring(0, 24)}...</p>
                </div>
                <div className='product'>
                    <img src={image[3]} alt={id} />
                    <p>{name[3]}</p>
                </div>
            </div>
            <p className='tagline'>{tagline}</p>
        </div>
    )
}

export default Card
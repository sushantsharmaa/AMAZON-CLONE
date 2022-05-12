import React from 'react'
import Banner from './Banner'
import "./main.css"
import Product from './Product'

const Main = () => {
    return (
        <div className='home_section'>
            <div className='banner_part'>
                <Banner />
            </div>
            <div className='product-field'>
                <div className='home__row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='home__row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Main
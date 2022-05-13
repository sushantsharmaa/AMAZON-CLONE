import React from 'react'
import { Link } from 'react-router-dom'
import "./textbar.css"

const Textbar = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p><i className="fas fa-shopping-cart"></i>All</p>
                    <p>Best Sellers</p>
                    <Link to="/products" >
                        <p style={{ fontSize: "1rem" }}>Mobiles</p>
                    </Link>
                    <p>Fashion</p>
                    <p>Customer Service</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Today's Deals</p>
                    <p>Amazon Pay</p>
                </div>
                <div className="right_data">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="navdata" />
                </div>
            </div>
        </div>
    )
}

export default Textbar
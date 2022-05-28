import React, { useEffect, useState } from 'react'
import axios from "axios";
import Banner from './Banner'
import "./main.css"
import Card from './Card'

const Main = () => {
    const [cardData, setCardData] = useState([]);

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/card");
        const data = await response.data;
        setCardData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='home_section'>
            <div className='banner_part'>
                <Banner />
            </div>
            <div className='product-field'>
                <div className='home__row'>
                    {cardData.map((item) => {
                        return <Card key={item.id} {...item} />
                    })}
                    <div className='last_card'>
                        <div id='last_card_one'>
                            <h5>Shop on the Amazon App</h5>
                            <p>Fast, convenient and secure | Over 17 crore products in your pocket</p>
                            <span>Download the Amazon App</span>
                        </div>
                        <div id='last_card_two'>
                            <img src='https://m.media-amazon.com/images/I/71zorsANP+L._SL1500_.jpg' alt='Havells' />
                            <h6>Havells HC4085 - 1000 W Air Care Styler</h6>
                            <p>₹2,149.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
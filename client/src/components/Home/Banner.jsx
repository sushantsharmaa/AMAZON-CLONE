import React from 'react'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61npwWFV0ML._SX3000_.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/814G81QOVIL._SX3000_.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61pwfzhIBbL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71bVdt40uCL._SX3000_.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/617c0dVGtwL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61cVtPiiXsL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}

export default Banner
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
    const { id } = useParams("");
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`).then((res) => setData(res.data));
    }, [])

    const handleClick = async () => {
        await axios.post("http://localhost:5000/cart", data).catch((error) => console.log(error))
        alert("Added to cart");
    }
    return (
        <div className="details">
            <div className="d-left">
                <img src={data.url} alt={data.title} />
            </div>
            <div className="d-right">
                <h2>{data.title}</h2>
                <h4><span>₹ </span>{data.price}</h4>
                <div className="d-button">
                    <button onClick={handleClick}>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
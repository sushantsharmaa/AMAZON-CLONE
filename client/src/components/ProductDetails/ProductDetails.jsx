import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
    const { id } = useParams("");
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://amazon-clone-fake-api.herokuapp.com/products/${id}`).then((res) => setData(res.data));
    }, [id])

    const handleClick = async () => {
        await axios.post("https://amazon-clone-fake-api.herokuapp.com/cart", data).catch((error) => console.log(error))
        alert("Added to cart");
        window.location.reload(false);
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
                    <Link to="/cart" onClick={handleClick}><button>Buy Now</button></Link>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails
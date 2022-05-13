import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import "./productlist.css"

const ProductList = () => {
    const { products } = useSelector((state) => state.productData);
    const [lowAndHigh, setLowAndHigh] = useState("");

    return (
        <div className='plist'>
            <hr />
            <div className='sort'>
                <h6>MOBILES</h6>
                <select onChange={(e) => setLowAndHigh(e.target.value)}>
                    <option>Sort By: Featured</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                </select>
            </div>
            <hr />
            <div className='plist-main'>
                <div className='filters'>
                    <hr />
                    <h6>FILTERS</h6>
                    <hr />
                    <h6>Brand</h6>
                    <input type="checkbox" name="oneplus" />
                    <label style={{ marginLeft: "5px" }} >OnePlus</label>
                    <br />
                    <input type="checkbox" name="xiaomi" />
                    <label style={{ marginLeft: "5px" }} >Xiaomi</label>
                    <br />
                    <input type="checkbox" name="iQOO" />
                    <label style={{ marginLeft: "5px" }} >iQOO</label>
                    <br />
                    <input type="checkbox" name="realme" />
                    <label style={{ marginLeft: "5px" }} >Realme</label>
                    <br />
                    <input type="checkbox" name="samsung" />
                    <label style={{ marginLeft: "5px" }} >Samsung</label>
                    <br />
                    <h6 style={{ marginTop: "15px" }}>Price</h6>
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} >Under ₹1,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} >₹1,000 - ₹5,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} >₹5,000 - ₹10,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} >₹10,000 - ₹20,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} >Over ₹20,000</label>

                </div>
                <div className='plist-products'>
                    {products && products.filter((item) => {
                        return item.price > 0
                    }).sort((a, b) => {
                        if (lowAndHigh === "low-high") {
                            return a.price - b.price;
                        }
                        if (lowAndHigh === "high-low") {
                            return b.price - a.price;
                        }
                        return 0;
                    }).map((item) => {
                        return <Product key={item.id} {...item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductList
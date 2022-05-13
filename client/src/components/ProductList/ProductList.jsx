import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import "./productlist.css"

const ProductList = () => {
    const { products } = useSelector((state) => state.productData);
    return (
        <div className='plist'>
            <hr />
            <div className='sort'>
                <h6>MOBILES</h6>
                <select>
                    <option>Sort By: Featured</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
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
                    <label style={{ marginLeft: "5px" }} for="brand">OnePlus</label>
                    <br />
                    <input type="checkbox" name="xiaomi" />
                    <label style={{ marginLeft: "5px" }} for="brand">Xiaomi</label>
                    <br />
                    <input type="checkbox" name="iQOO" />
                    <label style={{ marginLeft: "5px" }} for="brand">iQOO</label>
                    <br />
                    <input type="checkbox" name="realme" />
                    <label style={{ marginLeft: "5px" }} for="brand">Realme</label>
                    <br />
                    <input type="checkbox" name="samsung" />
                    <label style={{ marginLeft: "5px" }} for="brand">Samsung</label>
                    <br />
                    <h6 style={{ marginTop: "15px" }}>Price</h6>
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} for="price">Under ₹1,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} for="price">₹1,000 - ₹5,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} for="price">₹5,000 - ₹10,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} for="price">₹10,000 - ₹20,000</label>
                    <br />
                    <input type="checkbox" name="price" />
                    <label style={{ marginLeft: "5px" }} for="price">Over ₹20,000</label>

                </div>
                <div className='plist-products'>
                    {products.map((item) => {
                        return <Product key={item.id} {...item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductList
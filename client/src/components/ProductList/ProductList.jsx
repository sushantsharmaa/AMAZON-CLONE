import "./productlist.css";
import Product from "./Product";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.productData);
  const [lowAndHigh, setLowAndHigh] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="plist">
      <hr />
      <div className="sort">
        <h6>MOBILES</h6>
        <select onChange={(e) => setLowAndHigh(e.target.value)}>
          <option>Sort By: Featured</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>
      <hr />
      <div className="plist-main">
        <div className="filters">
          <hr />
          <h6>FILTERS</h6>
          <hr />
          <h6>Brand</h6>
          <input
            type="checkbox"
            value="OnePlus"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>OnePlus</label>
          <br />
          <input
            type="checkbox"
            value="Redmi"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>Redmi</label>
          <br />
          <input
            type="checkbox"
            value="iQOO"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>iQOO</label>
          <br />
          <input
            type="checkbox"
            value="Realme"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>Realme</label>
          <br />
          <input
            type="checkbox"
            value="Samsung"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>Samsung</label>
          <br />
          <h6 style={{ marginTop: "15px" }}>Price</h6>
          <input
            type="checkbox"
            value="1000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>Under ₹1,000</label>
          <br />
          <input
            type="checkbox"
            value="5000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>₹1,000 - ₹5,000</label>
          <br />
          <input
            type="checkbox"
            value="10000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>₹5,000 - ₹10,000</label>
          <br />
          <input
            type="checkbox"
            value="20000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>₹10,000 - ₹20,000</label>
          <br />
          <input
            type="checkbox"
            value="20001"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label style={{ marginLeft: "5px" }}>Over ₹20,000</label>
        </div>
        <div className="plist-products">
          {products &&
            products
              .filter((item) => {
                return item.title.includes(brand);
              })
              .filter((item) => {
                if (price === 0) {
                  return item.price > 0;
                } else if (Number(price) > 20000) {
                  return item.price > Number(price);
                }
                return item.price < Number(price);
              })
              .sort((a, b) => {
                if (lowAndHigh === "low-high") {
                  return a.price - b.price;
                }
                if (lowAndHigh === "high-low") {
                  return b.price - a.price;
                }
                return 0;
              })
              .map((item) => {
                let route = `/products/${item.id}`;
                return (
                  <Link
                    key={item.id}
                    style={{ textDecoration: "none", color: "black" }}
                    to={route}
                  >
                    <Product {...item} />
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

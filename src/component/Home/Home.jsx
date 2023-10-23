import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="product-card">
                <img
                    className="product-image"
                    src="https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303_1280.jpg"
                    alt="Product"
                />
                <p className="product-price">${100}</p>
                <button className="buy-now-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default Home;
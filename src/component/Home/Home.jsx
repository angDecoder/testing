import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { getProducts } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productsSlice";
import CartItem from "../Cart/CartItem";

function Home() {
    const cart_items = useSelector(state => state.cart.items);
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        try {
            const fetchProducts = async () => {
                const res = await getProducts();
                dispatch(setProducts(res.products));
            }
            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    },[])

    return (
        <div className="home">
            <div className="products">
                {products.map((product) => {
                    const image = product.images[0];
                    return <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={image}
                    />
                })}
            </div>
            <div className="cart">
            <div className={"heading"}>
                <h1>Cart</h1>
            </div>
            <div className={"cart_body"}>
                {cart_items.length === 0 && 
                    <div className={"empty_cart"}>
                        No items are there in cart
                    </div>
                }
                {cart_items.length > 0 &&
                    cart_items.map(item => (
                        <CartItem 
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))
                }
            </div>
        </div>
        </div>
    );
}

export default Home;
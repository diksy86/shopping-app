import { Header } from "./Header"
import Footer from './Footer'
// import catalogue from '../catalogue'
import Product from "./Product"
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";

const Shop = ({ cart, setCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <>
        <Header cart={cart} />
        <div className="page-wrapper container">
            <h3>Shop</h3>
            <div className="catalogue row">
                {products.map((products, index) => {
                    return <Product key={index} products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
                })}
            </div>
        </div>
        <ScrollToTop smooth />
        <Footer />
        </>
    )
}

export default Shop;
import { Header } from "./Header"
import Footer from './Footer'
import catalogue from '../catalogue'
import Product from "./Product"

const Shop = ({ cart, setCart }) => {
    return (
        <>
        <Header cart={cart} />
        <div className="page-wrapper container">
            <h3>Shop</h3>
            <div className="catalogue row">
                {catalogue.map((product, index) => {
                    return <Product product={product} cart={cart} setCart={setCart} />
                })}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Shop;
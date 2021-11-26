import { Header } from "./Header"
import Footer from './Footer'

const AddNewProduct = ({ cart, setCart }) => {
    return (
        <>
        <Header cart={cart}/>
        <div className="page-wrapper container">
        <h3>Add New Product</h3>
        </div>
        <Footer/>
        </>
    )
    
    }

export default AddNewProduct
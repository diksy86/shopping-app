import { Header } from "./Header"
import Footer from './Footer'
import catalogue from "../catalogue";
import './Checkout.css'
import { useState } from 'react';
import { Link } from "react-router-dom";


const Checkout = ({ cart, setCart }) => {

    const balance = 1000;

    const [complete, setComplete] = useState(false);

    var items = {...cart.items};
    for(const id in items) {
        let product = false;
        for(let i = 0; i < catalogue.length; i++) {
            if(catalogue[i].id === parseInt(id)) {
                product = catalogue[i];
                break;
            }
        }
        items[id] = {...items[id], id: product.id, name: product.name, img: product.img}
    }
    items = Object.values(items);

    const onQuantityChange = (e, item) => {
        const items = {...cart.items}
        const q = e.target.value === '' ? 1 : parseInt(e.target.value);
        if (items.hasOwnProperty(item.id)) {
            items[item.id].quantity = q;
            //recalculate itemCount & total
            let total = 0;
            let itemCount = 0;
            for(var id in items) {
                total += items[id].price * items[id].quantity;
                itemCount += items[id].quantity;
            }

            setCart({...cart, items: items, total: total, itemCount: itemCount })
        }
    }

    const onRemove = (item) => {
        if(!window.confirm(`Are you sure you want to remove ${item.name} from your cart?`))
            return;

        const items = {...cart.items}
        if (items.hasOwnProperty(item.id)) {
            delete items[item.id];
            //recalculate itemCount & total
            let total = 0;
            let itemCount = 0;
            for(var id in items) {
                total += items[id].price * items[id].quantity;
                itemCount += items[id].quantity;
            }
            setCart({...cart, items: items, total: total, itemCount: itemCount })
        }
    }

    const onPay = () => {
        if(cart.total > balance) {
            alert('Insufficient funds. Please remove some of items from your cart.');
            return;
        }
        setCart({...cart, items: {}, total: 0, itemCount: 0})
        setComplete(true);
    }
    return (
        <>
        <Header cart={cart} />
        <div className="page-wrapper container">
            <h3>Checkout</h3>
            {
            complete ? 
                <div className="card-panel green lighten-3"><h6>Thank you for your purchase!</h6></div> 
            : 
                (items.length > 0 ? 
                <div className="checkout-table">
                    <table class="striped">
                        <thead>
                        <tr>
                            <th colSpan='2'>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return <tr key={index}>
                                    <td><img src={item.img} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>
                                        <input type="number" min="1" max="20" onChange={(event) => onQuantityChange(event, item)}  value={item.quantity} />
                                        <button onClick={() => onRemove(item)} className="btn btn-small red lighten-2 waves-effect waves-light">Remove</button>
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    </tr>
                            })}
                            <tr>
                                <th colSpan='3' className="total">
                                    Total
                                </th>
                                <th>${cart.total.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="checkout-buttons">
                        <button className="btn btn-large waves-effect waves-light" onClick={onPay}><i className="material-icons left">credit_card</i>Complete Purchase</button>
                    </div>
                </div> 
                :
                <>
                    <div className="card-panel red lighten-3">
                        <h6>Your cart is empty.</h6>
                    </div>
                    <Link to="/" className="btn waves-effect waves-light" style={{marginTop: '20px'}}>Go to Shop</Link>
                </>
                )
            }
        </div>
        <Footer />
        </>
    )
}

export default Checkout;
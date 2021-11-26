import './Product.css';
const Product = ({products, setProducts, cart, setCart}) => {
  const addToCart = () => {
    const items = {...cart.items}
    if (items.hasOwnProperty(products.id)) {
      items[products.id].quantity += 1;
    } else {
      items[products.id] = {
        price: products.price,
        quantity: 1,
      }
    }
    setCart({...cart, items: items, itemCount: cart.itemCount + 1, total: cart.total + products.price})
  }

  console.log(process.env.PUBLIC_URL);
    return (
    <div className="col s12 l6 xl4">
      <div className="card">
        <div className="card-image">
          <img src={"http://localhost:3000/" + products.img} alt="" />
          <span className="card-title">{products.name}</span>
        </div>
        <div className="card-content">
          <p>{products.desc}</p>
        </div>
        <div className="card-action">
            <button className="waves-effect waves-light btn" onClick={addToCart}><i className="material-icons left">add_shopping_cart</i>Buy</button>
            <span className="card-price">${products.price}</span>
        </div>
      </div>
    </div>
  
    )
}

export default Product;
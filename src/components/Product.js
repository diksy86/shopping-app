import './Product.css';
const Product = ({product, cart, setCart}) => {
  const addToCart = () => {
    const items = {...cart.items}
    if (items.hasOwnProperty(product.id)) {
      items[product.id].quantity += 1;
    } else {
      items[product.id] = {
        price: product.price,
        quantity: 1,
      }
    }
    setCart({...cart, items: items, itemCount: cart.itemCount + 1, total: cart.total + product.price})
  }
    return (
    <div className="col s12 l6 xl3">
      <div className="card">
        <div className="card-image">
          <img src={product.img} alt=""/>
          <span className="card-title">{product.name}</span>
        </div>
        <div className="card-content">
          <p>{product.desc}</p>
        </div>
        <div className="card-action">
            <button className="waves-effect waves-light btn" onClick={addToCart}><i className="material-icons left">add_shopping_cart</i>Add to Cart</button>
            <span className="card-price">${product.price}</span>
        </div>
      </div>
    </div>
  
    )
}

export default Product;
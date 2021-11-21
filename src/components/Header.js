import { Link } from "react-router-dom"

export const Header = ({ cart }) => {
    
    return (  
    <nav>
    <div className="nav-wrapper cyan darken-4">
      <div className="container">
      <Link to="/" className="brand-logo">My Shop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/checkout">My Cart{cart.itemCount > 0 && <span className="badge new" data-badge-caption={cart.itemCount > 1 ? 'items' : 'item'}>{cart.itemCount}</span>}</Link></li>
      </ul>
      </div>
    </div>
  </nav>
  )
}
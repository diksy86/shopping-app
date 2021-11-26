import { Link } from "react-router-dom"
import {useState} from 'react';
import './Header.css';

export const Header = ({ cart }) => {
  
    const [mobileNav, setMobileNav] = useState(false);
    let navClass = 'right';

    const toggleNav = () => {
      setMobileNav(!mobileNav);
    }

    if(mobileNav)
      navClass += ' menu-visible';
      
    return (  
      <>
    <nav>
    <div className="nav-wrapper cyan darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">My Shop</Link>
        <button type="button" className="mobile-menu-trigger active btn btn-flat" onClick={toggleNav}><i className="material-icons">menu</i></button>
        <ul id="main-nav" className={navClass}>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/checkout">My Cart{cart.itemCount > 0 && <span className="badge new" data-badge-caption={cart.itemCount > 1 ? 'items' : 'item'}>{cart.itemCount}</span>}</Link></li>
          <li><Link to="/add">Add New Product</Link></li>
        </ul>
      </div>
    </div>
  </nav>
</>
  )
}
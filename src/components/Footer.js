
const Footer = () => {
    return (  
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Shopping App</h5>
                <p className="grey-text text-lighten-4">Christmas Sale</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Need help?</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Shipping & Return Policy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Payment Methods</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 powered by DeeDee
            </div>
          </div>
        </footer>
    )
}

export default Footer;
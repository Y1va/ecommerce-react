import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navlogo from '../../assets/logo.png';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function Navbar({ setCartOpen, setMenuOpen }) {
  const { cartLength } = useContext(AppContext);

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <Link to="/">
            <img src={Navlogo} className="nav__logo" />
          </Link>

          <div className="nav__links">
            <Link to="/products" className="nav__link">
              Products
            </Link>
            <button className="nav__cart" onClick={() => setCartOpen(true)}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="nav__cart__icon"
              />
              {cartLength() > 0 && (
                <span className="cart__length">{cartLength()}</span>
              )}
            </button>
            <button className="nav__menu" onClick={() => setMenuOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

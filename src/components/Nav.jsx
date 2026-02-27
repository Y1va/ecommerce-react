import Navbar from './ui/Navbar';
import NavMenu from './ui/NavMenu';
import NavCart from './ui/NavCart';
import { useState } from 'react';

function Nav() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}

export default Nav;

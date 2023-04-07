import React from 'react';

import CartWidget from '../CartWiget/CartWidget';
const Navbar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <CartWidget cantCarrito={2}/>
        </div>
    );
}

export default Navbar;

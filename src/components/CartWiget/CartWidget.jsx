import React from 'react';

const CartWidget = ( {cantCarrito} ) => {
    return (
        <div>
            <p>Carrito</p>
            <p>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;

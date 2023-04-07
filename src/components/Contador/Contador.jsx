import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1) 
    
    const sum = () => setContador(contador + 1)
    const res = () => setContador(contador - 1)
    return (
        <div>
            <button onClick={()=> res()}>-</button>
            <button onClick={()=> sum()}>+</button>
        </div>
    );
}

export default Contador;

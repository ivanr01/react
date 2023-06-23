// contador de productos que almacene el numero de unidades 

import { useState } from "react"
 
const ItemCount = () => {
    const [contador, SetContador] = useState(1)

    const incrementar = () => {
        if (contador<10){
        SetContador(contador+1);
        }
    }

    const decrementar = () => {
        if (contador>1){
            SetContador(contador-1)
        }
    }

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount
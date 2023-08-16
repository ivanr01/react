import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png";
    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget
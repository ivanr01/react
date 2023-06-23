import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>
            HUK
        </h1>
        <nav>
            <ul>
                <li>Comida rápida</li>
                <li>Bebida</li>
                <li>Postres</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
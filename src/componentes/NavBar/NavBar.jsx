import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <img src="https://cdn-icons-png.flaticon.com/128/2819/2819383.png" alt="Restaurante" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/2"> Comidas rapidas </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3"> Otras comidas </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar
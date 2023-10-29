import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {

  return (
    <header>
      <Link to="/">
      <img className='logoAika' src={"../img/aika-logo.jpg"} alt="logo aika" />
      </Link>


      <nav>

        <ul>
          <li>
            <NavLink to="/"> Todos los Productos </NavLink>
          </li>
          <li>
            <NavLink to="categoria/1"> Alimento para Perro </NavLink>
          </li>
          <li>
            <NavLink to="categoria/2"> Alimento para Gato </NavLink>
          </li>
          <li>
            <NavLink to="categoria/3"> Accesorios </NavLink>
          </li>
        </ul>

      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar
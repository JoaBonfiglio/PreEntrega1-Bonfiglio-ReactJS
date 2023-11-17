import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav id="nav">
            <Link to="/">
                <h3> ZapasFlow </h3>
            </Link>
            <div className='categories'>
                <NavLink to="/category/Marcas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Marcas</NavLink>
                <NavLink to="/category/Botines" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
                <NavLink to="/category/Zapatillas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;

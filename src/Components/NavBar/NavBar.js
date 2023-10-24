import CartWidgetartWidget from "../CartWidget/CartWidget"

const NavBar = ( ) => {
    return(
        <nav> 
            <h3> ZapasFlow </h3>
            <div>
                <ul>
                    <li> <a href="#">Marcas</a> </li>
                    <li> <a href="#">Zapatillas</a> </li>
                    <li> <a href="#">Botines</a> </li>
                    <li> <a href="#">Ojotas/Sandalias</a> </li>
                </ul>
            </div>
            <CartWidgetartWidget/>
        </nav>
    ) 
}

export default NavBar
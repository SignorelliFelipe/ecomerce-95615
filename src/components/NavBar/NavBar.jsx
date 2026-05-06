import logo from "../../img/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className ='navbar'>
        <div className='brand'>
            <img src={logo} alt="" className='brand-img' />
        </div>


        <ul className='categories'>
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Monitores</li>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default NavBar
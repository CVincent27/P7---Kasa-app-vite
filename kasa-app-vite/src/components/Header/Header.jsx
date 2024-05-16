import { NavLink } from "react-router-dom"
import './Header.scss'
import logo from '../../assets/KasaLogo.png'

export default function Header() {
  return (
    <nav className='navBar'>
      <img src={logo} alt='logo de Kasa'></img>
      <ul className='navLinks'>
        <NavLink className={({ isActive }) =>
          'navLink ' + (isActive ? 'active' : '')
        } to="/">Acceuil</NavLink>
        <NavLink className={({ isActive }) =>
          'navLink ' + (isActive ? 'active' : '')
        } to="/About">A propos</NavLink>
      </ul>
    </nav>
  )
}
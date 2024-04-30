import { Link } from "react-router-dom"
import './Header.scss'
import logo from '../../assets/KasaLogo.png'

export default function Header() {
  return (
    <nav className='navBar'>
      <img src={logo} alt='logo de Kasa'></img>
      <ul  className='navLinks'>
        <Link className='navLink' to="/">Acceuil</Link>
        <Link className='navLink' to="About">A propos</Link>
      </ul>
    </nav> 
  )
}
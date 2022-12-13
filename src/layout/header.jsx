import { Link, NavLink } from 'react-router-dom'
import { Logo } from '@/components'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-wrapper">
        <Logo className="header__logo" />
        <span className="header__logo-text">Kasa</span>
      </Link>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="header__nav-link">
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

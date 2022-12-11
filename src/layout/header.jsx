import { NavLink } from 'react-router-dom'
import { Logo } from '@/components'

export default function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
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

import { Logo } from '@/components'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo className="footer__logo" />
        <p className="footer__copyright">&#169; {currentYear} Kasa. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

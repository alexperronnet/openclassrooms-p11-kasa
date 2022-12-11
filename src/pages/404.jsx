import { Link } from 'react-router-dom'

export default function notFound() {
  return (
    <div className="not-found">
      <div className="not-found__infos">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Oups ! La page que vous demandez n'existe pas...</p>
      </div>
      <Link to="/" className="not-found__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

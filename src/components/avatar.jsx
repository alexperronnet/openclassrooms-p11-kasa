export default function Avatar({ src, name }) {
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return (
    <div className="avatar">
      <div className="avatar__name">
        <span className="avatar__first-name">{firstName}</span>
        <span className="avatar__last-name">{lastName}</span>
      </div>
      <img className="avatar__image" src={src} alt={name} />
    </div>
  )
}

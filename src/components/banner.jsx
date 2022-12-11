export default function Banner({ title, image }) {
  return (
    <section className="banner">
      <img className="banner__image" src={image} alt={title} />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

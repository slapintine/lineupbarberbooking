export default function ImageGallery({ eyebrow, title, description, images }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <article
              key={image.src}
              className={`gallery-card ${index === 0 ? "featured" : ""}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{image.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

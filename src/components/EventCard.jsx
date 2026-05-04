function EventCard({ title, image, date, tags = [] }) {
  return (
    <article className="event-card card-component" style={{ position: 'relative' }}>
      <div className="card-image-wrap">
        <img src={image} alt={title} />
        <span className="event-badge">Bordeaux</span>
        <div className="card-bottom image-overlay" style={{ position: 'absolute', bottom: '0', left: 0, right: 0, padding: 0 }}>
          <div style={{ padding: '1.4rem' }}>
            <div style={{ color: 'var(--color-orange-500)', fontWeight: 800, marginBottom: '.5rem' }}>{date}</div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '1.25rem', margin: 0, fontWeight: 800 }}>{title}</h4>
            {tags.length > 0 && (
              <div style={{ marginTop: '.8rem' }}>
                {tags.map((t, i) => (
                  <span key={i} style={{ color: 'var(--color-orange-500)', marginRight: '1rem', fontWeight: 700, fontSize: '.85rem' }}>{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;


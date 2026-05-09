import './Map.css';

function Map(props) {
    const MAP_SRC = props.src ||
        'https://www.google.com/maps/d/u/0/embed?mid=1ZIv0EJwWIviJXWtxwX3LF-Y9ViS_ANA&ehbc=2E312F';

    const title = props.title || "Carte de Bordeaux - Junia Food Guide";

    return (
        <div className="map" role="region" aria-label={title}>
            <iframe
                src={MAP_SRC}
                title={title}
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    )
}

export default Map;
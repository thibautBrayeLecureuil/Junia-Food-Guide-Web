import junia from '../../assets/junia.jpg';

function Card(props) {
    const title = props.dish?.name || "Titre";

    return (
        <a className="card-component" href={`/restaurant/${props.dish?.id || '#'}`}>
            <div className="card-image-wrap">
                <img src={junia} alt={title} />
                <div className="image-overlay">
                    <div className="image-overlay-title">{title}</div>
                </div>
            </div>
        </a>
    );
}

export default Card;
import junia from '../../assets/junia.jpg';
import voirPlus from '../../assets/zoom-in-svgrepo-com.svg';
import './CardRestaurant.css';


function CardRestaurant(props) {
    const isVoirPlus = props.restaurant === "voir_plus";
    const title = isVoirPlus ? "Voir plus" : props.restaurant.name;
    let badges = [];
    if (!isVoirPlus){
        const location = props.restaurant.location.city || "Bordeaux";
        const price = props.restaurant.priceRange || "€€";
        badges.push(<span className="event-badge" id="location">{location}</span>);
        badges.push(<span className="event-badge" id="price">{price}</span>);
    }

    return (
        <a className="card-component" href={ isVoirPlus ? '/restaurants' : '/restaurant/' + props.restaurant.id } style={{ position: 'relative' }}>

            <div className={isVoirPlus ?  props.restaurant : "card-image-wrap"}>
                <img src={ isVoirPlus ? voirPlus : props.restaurant.image || junia} alt={title} />
                {badges}
                <div className="image-overlay">
                    <div className="image-overlay-title">{title}</div>
                </div>
            </div>
        </a>
    );
}

export default CardRestaurant;
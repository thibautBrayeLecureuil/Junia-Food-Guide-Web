import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import config from "../../../local.config.json";
import Review from "../../components/Review/Review.jsx";
import "../css/RestaurantDetail.css";
import Map from "../../components/Map/Map.jsx";
import instagramIcon from "../../assets/instagram-logo.svg";
import facebookIcon from "../../assets/facebook-svgrepo-com.svg";


function RestaurantDetail() {
    const [restaurant, setRestaurant] = useState({});

    const [loading, setLoading] = useState(true);

    const [reviewsData, setReviewsData] = useState([]);

    const params = useParams();

    const location = restaurant.location || {};

    useEffect(() => {
        fetch(config["api-url"] + "restaurant?id=" + params.id)
            .then((response) => response.json())
            .then((data) => setRestaurant(data))
            .catch((error) => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (restaurant.id && !loading) {
            fetch(config["api-url"] + "reviews?idRestaurant=" + restaurant.id)
                .then((response) => response.json())
                .then((data) => setReviewsData(data))
                .catch((error) => console.error('Error fetching data:', error))
        }
    }, [restaurant, loading]);

    let render;

    if (loading) {
        render = <div className="home loading-section"><p>Loading...</p></div>;
    } else {
        render = (
            <div className="home">
                <div className="restaurant-name">
                    <h1>{restaurant.name}</h1>

                </div>
                <div className="restaurant-presentation">
                    <div className="restaurant-text">

                        <p>{restaurant.description}</p>
                    </div>
                    <div className="picture-section">
                        <img className="restaurant-picture" src={restaurant.image} alt=""/>
                    </div>
                </div>

                <div className="restaurant-info">
                    <div className="restaurant-details">
                        <div className="location">
                            <p className="city">{location.city}</p>
                            <p className="country">{location.country}</p>
                            <p className="address">{location.address}</p>
                        </div>
                        <div className="restaurant-socials">
                            <a href={restaurant.socials.instagram} target="_blank" rel="noopener noreferrer"><img className="social-icon" src={instagramIcon} alt="instagram icon"/> </a>
                            <a href={restaurant.socials.facebook} target="_blank" rel="noopener noreferrer"><img className="social-icon" src={facebookIcon} alt="facebook icon"/></a>
                        </div>
                    </div>
                    <div className="map-integration">
                        <Map src={location.mapIntegration} ></Map>
                    </div>
                </div>
                <div className="reviews-section">
                    <h2>Les avis du club :</h2>
                    <div className="reviews-grid">
                        {reviewsData.map((review, index) => (<Review data={review} key={index}/>))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        render
    );

}

export default RestaurantDetail;
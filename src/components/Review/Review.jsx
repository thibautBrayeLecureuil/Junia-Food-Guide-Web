import './Review.css'
import userIcon from "../../assets/user-svgrepo-com.svg";

function Review(props) {

    return (
        <div className="review">
            <div className="user-section">
                <img src={userIcon} alt="Avatar de l'utilisateur" className="user-avatar"/>
                <p className="user-name">{props.data.username}</p>

            </div>
            <div className="review-content">
                <p>{props.data.text}</p>
            </div>

        </div>
    );
}
export default Review;
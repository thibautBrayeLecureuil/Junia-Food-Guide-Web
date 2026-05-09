import Header from "../../components/Header.jsx";
import "../../index.css";
import "../../App.css"
import Footer from "../../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";

function ErrorPage(){
    return(
        <div className="error-page">
            <h1>C'est cassé</h1>
            <p>Je ne sais pas ce qui se passe ou ce que tu as fait mais ça ne fonctionne pas.</p>
            <div className="py-4">
                <Link to="/" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold py-2 px-4 rounded-full">Retour à l'accueil</Link>
            </div>
        </div>
    );
}

export default ErrorPage;
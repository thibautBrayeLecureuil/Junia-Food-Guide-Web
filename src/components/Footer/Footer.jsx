import {Link} from "react-router-dom";
import './Footer.css';

const footerLinks = {
    features: ['Nos adresses', 'Nos événements', 'Partenariats'],
    learnMore: ['Blog', 'Témoignages', 'Médias'],
    support: ['Contact', 'Support', 'Mentions légales'],
}

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer_banner" aria-hidden="true" />
            <div className="footer_content">
                <div className="footer_inner">
                    <nav className="footer_nav" aria-label="Liens de pied de page">
                        <div className="footer_col">
                            <h3>Features</h3>
                            <ul role="list">
                                {footerLinks.features.map((item) => (
                                    <li key={item}>
                                        <Link to="/a-propos">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h3>Learn more</h3>
                            <ul role="list">
                                {footerLinks.learnMore.map((item) => (
                                    <li key={item}>
                                        <Link to="/a-propos">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_col">
                            <h3>Support</h3>
                            <ul role="list">
                                {footerLinks.support.map((item) => (
                                    <li key={item}>
                                        <Link to="/a-propos">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import userIcon from '../assets/user-svgrepo-com.svg';
import instagramIcon from '../assets/instagram-logo.svg';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);
        }
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner max-w-7xl mx-auto px-4">

                <div className="logo-box">
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="Logo_Junia_Food_Guide" className="size-full" />
                    </Link>
                </div>

                <nav className="nav-links" aria-label="Main navigation">
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/restaurants" className="nav-link">Restaurants</Link>
                    <Link to="/evenements" className="nav-link">Événements</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                <div className="right-side">
                    <a href="https://www.instagram.com/junia.foodguide/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="instagram_icon" className="instagram-icon" />
                    </a>
                    <Link to="/inscription" className="btn-cta">
                        <img src={userIcon} alt="user_icon" className="user-icon" />
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Navbar;

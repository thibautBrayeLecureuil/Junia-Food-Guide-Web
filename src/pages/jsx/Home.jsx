import CardRestaurant from "../../components/CardRestaurant/CardRestaurant.jsx";
import EventCard from "../../components/EventCard.jsx";
import {useState, useEffect} from 'react';
import config from '../../../local.config.json';
import Map from "../../components/Map/Map.jsx";
import "../css/Home.css";

function Home() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch(config["api-url"]+"restaurants?numberOfRestaurants=5")
            .then((response) => response.json())
            .then((data) => setRestaurants(data.restaurants))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const cards = restaurants ? restaurants.map((restaurant,index) => (
        <CardRestaurant restaurant={restaurant} key={index}/>
    )) : [];

    cards.push(<CardRestaurant restaurant={"voir_plus"} key={6}/>)

    const events = restaurants ? restaurants.slice(0,3).map((d, i) => (
        <EventCard key={i} title={d.name || d.title || 'Événement'} image={d.image} date={"19 MAI 2026"} tags={["Immersions","XP"]} />
    )) : [];

    return (
        <div className="home px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <section className="hero">
                    <div>
                        <h2 className="hero-title">Venez découvrir<br/>Bordeaux avec nous !<br/></h2>
                    </div>
                    <div>
                        <p className="hero-text"><b>JUNIA Food Guide</b></p>
                        <p className="hero-text">
                            Notre mission est de dénicher, tester et partager les meilleures adresses food autour de JUNIA
                            et de la métropole bordelaise : restaurants, fast-foods, snacks, cafés, bons plans et pépites
                            cachées.
                        </p>
                        <p className="hero-text">
                            Mais JUNIA Food Guide, c&apos;est aussi une communauté passionnée, des événements, des
                            collaborations avec des restaurateurs locaux et une vraie envie de partager la culture food
                            sous toutes ses formes.
                        </p>
                    </div>
                </section>

                <h2 className="home-title">Nos dernières découvertes</h2>
                <section className="card-grid">
                    {cards}
                </section>


                <h2 className="home-title">Notre campus</h2>
                <Map></Map>

                <section className="events-section mt-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-3xl font-black text-purple-900 mb-8">Les événements</h3>
                        <div className="card-grid">
                            {events}
                        </div>
                        <div className="text-center" style={{ marginTop: '2rem' }}>
                            <a className="cta-orange" href="/src/pages/jsx/Events" style={{ display: 'inline-block', marginTop: 0 }}>
                                Tous les événements
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>)
}

export default Home;
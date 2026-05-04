import Card from "../components/Card/Card.jsx";
import EventCard from "../components/EventCard.jsx";
import {useState, useEffect} from 'react';

function Home() {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then((response) => response.json())
            .then((data) => setDishes(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const cards = dishes.recipes ? dishes.recipes.map((dish,index) => (
        <Card dish={dish} key={index}/>
    )) : [];

    const events = dishes.recipes ? dishes.recipes.slice(0,3).map((d, i) => (
        <EventCard key={i} title={d.name || d.title || 'Événement'} image={d.image} date={"19 MAI 2026"} tags={["Immersions","XP"]} />
    )) : [];

    return (
        <div className="bg-white px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <section className="hero">
                    <div>
                        <h2 className="hero-title">Venez découvrir<br/>Bordeaux avec nous !<br/></h2>
                    </div>
                    <div>
                        <p className="hero-text">Nos enseignements couvrent plus de 40 domaines des sciences de l’ingénieur et ouvrent à une grande diversité de métiers. Nos programmes d'études sont proposés sur plusieurs campus, avec une forte dimension internationale et un accompagnement personnalisé pour chaque étudiant.</p>
                    </div>
                </section>

                <section className="card-grid">
                    {cards}
                </section>

                <section className="events-section mt-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-3xl font-black text-purple-900 mb-8">Les événements</h3>
                        <div className="card-grid">
                            {events}
                        </div>
                        <div className="text-center mt-10">
                            <a className="cta-orange" href="/events">Tous les événements</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>)
}

export default Home;
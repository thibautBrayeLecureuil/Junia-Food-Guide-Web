import Card from "../components/Card/Card.jsx";
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

    return (
        <div className="bg-white px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">Notre
                    Menu Groovy</h2>
                <p className="text-center text-gray-600 mb-12 text-lg">Des plats sélectionnés qui vont vous
                    époustoufler !</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards}
                </div>
            </div>
        </div>)
}

export default Home;
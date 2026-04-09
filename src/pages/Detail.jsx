import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Instruction from "../components/Instruction/Instruction.jsx";
import Ingredient from "../components/Ingerdient/Ingredient.jsx";
import TagDetail from "../components/TagDetail/TagDetail.jsx";
import TypeDetail from "../components/TypeDetail/TypeDetail.jsx";


function Detail() {

    const params = useParams();

    const [reciepe, setReciepe] = useState (null);

    useEffect( () => {
        fetch('https://dummyjson.com/recipes/'+params.id)
            .then((response) => response.json())
            .then((data) => setReciepe(data))
    },[]) ;

    const tags = reciepe ? reciepe.tags.map((tag, index) => (
        <TagDetail key={index} label={tag} />) ) : [];

    const instructions = reciepe ? reciepe.instructions.map((label, index) => (
        <Instruction label={label} index={index} />
    )) : [];

    const ingredients = reciepe ? reciepe.ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
    )) : [];

    const types = reciepe ? reciepe.mealType.map((type, index) => (
        <TypeDetail key={index} label={type} />
    )) : [];

    return (
        reciepe ? (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
            <div className="relative h-[500px] overflow-hidden">
                <img src={reciepe.image} alt={reciepe.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <a
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
                    href="/"
                    data-discover="true"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-left size-5"
                >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path></svg
                >Retour au Menu</a
                >
                <div className="absolute bottom-8 left-8 right-8">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">{reciepe.name}</h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star size-5 fill-black"
                            >
                                <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path></svg
                            >4.6 (98 avis)
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">Facile</div>
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">Italienne</div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-3xl text-center transform rotate-1 shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-clock size-8 mx-auto mb-2 text-purple-700"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div className="font-black text-2xl text-purple-900">
                                {reciepe.prepTimeMinutes} min
                            </div>
                            <div className="text-sm text-purple-700 font-bold">Préparation</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-6 rounded-3xl text-center transform -rotate-1 shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chef-hat size-8 mx-auto mb-2 text-pink-700"
                            >
                                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
                                <path d="M6 17h12"></path>
                            </svg>
                            <div className="font-black text-2xl text-pink-900">{reciepe.cookTimeMinutes}</div>
                            <div className="text-sm text-pink-700 font-bold">Cuisson</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-200 to-orange-300 p-6 rounded-3xl text-center transform rotate-1 shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users size-8 mx-auto mb-2 text-orange-700"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <div className="font-black text-2xl text-orange-900">{reciepe.servings}</div>
                            <div className="text-sm text-orange-700 font-bold">Portions</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 p-6 rounded-3xl text-center transform -rotate-1 shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-flame size-8 mx-auto mb-2 text-yellow-700"
                            >
                                <path
                                    d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                                ></path>
                            </svg>
                            <div className="font-black text-2xl text-yellow-900">{reciepe.caloriesPerServing}</div>
                            <div className="text-sm text-yellow-700 font-bold">Calories</div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {tags}
                            {types}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border-4 border-purple-200 transform -rotate-1">
                            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">🛒 Ingrédients</h2>
                            <ul className="space-y-3">
                                {ingredients}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl border-4 border-orange-200 transform rotate-1">
                            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">👨‍🍳 Instructions</h2>
                            <ol className="space-y-4">
                                {instructions}
                            </ol>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
                            <p className="text-3xl font-black text-white mb-4">Prêt à cuisiner funky ? 🎉</p>
                            <a className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl" href="/" data-discover="true"
                            >Découvrir Plus de Plats</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<p>Loading ...</p>)
    )
}

export default Detail;
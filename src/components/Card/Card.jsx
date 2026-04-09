import Tag from "../Tag/Tag.jsx";
import Rating from "../Rating/Rating.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";

function Card(props) {

    const tags = props.dish.tags.map(tag => (
        <Tag key={tag} label={tag}/>
    ))

    return (
        <a className="group" href={"/dish/" + props.dish.id} data-discover="true">
            <div
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-pink-400"
                style={{transform: "rotate(1)"}}
            >
                <div className="relative h-64 overflow-hidden">
                    <img src={props.dish.image} alt={props.dish.name}/>
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <Difficulty label={props.dish.difficulty} />
                    <Rating rating={props.dish.rating} review={props.dish.reviewCount} />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">{props.dish.name}</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
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
                                className="lucide lucide-clock size-4"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg
                            >
                            <span>{props.dish.prepTimeMinutes} min</span>
                        </div>
                        <div className="flex items-center gap-1">
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
                                className="lucide lucide-users size-4"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg
                            >
                            <span>{props.dish.servings} portions</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center"><span
                            className="text-sm font-bold text-gray-600">{props.dish.cuisine}</span><span className="text-sm text-gray-500">{props.dish.caloriesPerServing} cal</span>
                        </div>
                    </div>
                </div>
            </div>
        </a
        >);
}

export default Card;
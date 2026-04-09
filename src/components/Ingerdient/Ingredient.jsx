function Ingredient(props) {
    return (
        <li className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span
                    ><span className="font-medium text-gray-800 pt-1">{props.ingredient}</span>
        </li>
    )
}

export default Ingredient;
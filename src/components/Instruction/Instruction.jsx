function Instruction(props) {
    return (
        <li className="bg-white p-4 rounded-2xl shadow-md">
            <div className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                <p className="text-gray-800 pt-1">{props.label}</p>
            </div>
        </li>
    )
}

export default Instruction;
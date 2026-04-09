function Tag (props){
    return (
        <span
            className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 rounded-full text-xs font-bold">{props.label}</span
        >
    )
}
export default Tag;
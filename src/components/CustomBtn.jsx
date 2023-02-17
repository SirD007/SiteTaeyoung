export default function CustomBtn(props) {
    return (
        <button className={`px-6 py-3 rounded hover:opacity-90 transition-all ${props.textColor} ${props.bgColor}`}>{props.text}</button>
    )
}
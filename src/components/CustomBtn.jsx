export default function CustomBtn(props) {
    return (
        <button className={`px-6 py-2 rounded hover:opacity-90 transition-all w-max ${props.textColor} ${props.bgColor}`}>{props.text}</button>
    )
}
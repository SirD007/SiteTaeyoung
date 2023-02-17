export default function SimpleHeading(props) {

    return (
        <div className="my-20 flex flex-col  gap-2">
            <h3 className="text-zinc-700 text-4xl font-heading font-bold">{props.title}</h3>
            <span className="text-zinc-700">{props.text}</span>
        </div>

    )
}
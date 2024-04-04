import "./styles.css"

type props = {
    text: string,
    method: Function,
    type: "focused" | "unfocused",
}

export default function Button ({
    text,
    method,
    type,
}: props) {
    return (
        <div className={`container ${type}`} onClick={() => method()}>
            {text}
        </div>
    )
}
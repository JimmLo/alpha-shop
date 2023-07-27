export default function Button() {
    function handleClick() {
        alert('fuck!')
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
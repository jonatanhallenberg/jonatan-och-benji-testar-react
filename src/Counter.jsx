const Counter = ({ number, setNumber, children }) => {

    const blueButtonStyle = {
        backgroundColor: number === 105 ? "green" : "blue",
        color: "white",
        fontSize: "24px"
    }

    blueButtonStyle.borderRadius = "10px";

    return (
        <div>
            <p>Nummer är: {number}</p>
            <button style={blueButtonStyle} type="button" onClick={() => setNumber(number + 1)}>Klicka här</button>
        </div>
    )
}

export default Counter;
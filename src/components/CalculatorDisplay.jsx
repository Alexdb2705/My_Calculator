import { useState } from "react"

function CalculatorDisplay({ calcDisplay }) {


    return (
        <div className="calculator-display">{calcDisplay.filter((element) => {return (element !== "Del")})}</div>
    )
}

export default CalculatorDisplay
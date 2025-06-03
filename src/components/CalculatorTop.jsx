import { useState } from "react"

function CalculatorTop({ calcDisplay, setCalcDisplay }) {

    return (
        <div className="calculator-top">
        <button onClick={() => setCalcDisplay("")} className="clean-btn">C</button>
            <div className="calculator-display">{calcDisplay}</div>
        </div>
    )
}

export default CalculatorTop
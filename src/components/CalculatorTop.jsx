import { useState } from "react"

function CalculatorTop({ calcDisplay, setCalcDisplay }) {

    return (
        <>
        <button onClick={() => setCalcDisplay("")} className="clean-btn">C</button>
            <div className="calculator-display">{calcDisplay}</div>
        </>
    )
}

export default CalculatorTop
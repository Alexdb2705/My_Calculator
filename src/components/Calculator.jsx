import CalculatorRow from "./CalculatorRow.jsx"
import CalculatorDisplay from "./CalculatorDisplay.jsx"
import '../Calculator.css'
import { useParams } from "react-router-dom"
import { useState } from "react"

function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState([])

    return (
        <div className="calculator-container">
            <CalculatorDisplay calcDisplay={calcDisplay} />
            <div className="calculator-btns">
                <CalculatorRow btns={[7, 8, 9, "+"]} setCalcDisplay={setCalcDisplay} calcDisplay={calcDisplay} />
                <CalculatorRow btns={[4, 5, 6, "-"]} setCalcDisplay={setCalcDisplay} calcDisplay={calcDisplay} />
                <CalculatorRow btns={[1, 2, 3, "x"]} setCalcDisplay={setCalcDisplay} calcDisplay={calcDisplay} />
                <CalculatorRow btns={[0, "Del", "=", "/"]} setCalcDisplay={setCalcDisplay} calcDisplay={calcDisplay} />
            </div>
        </div>
    )
}

export default Calculator
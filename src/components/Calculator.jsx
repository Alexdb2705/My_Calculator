import CalculatorRow from "./CalculatorRow.jsx"
import CalculatorDisplay from "./CalculatorDisplay.jsx"
import '../Calculator.css'
import { useParams } from "react-router-dom"
import { useState } from "react"

function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState("123456789")

    return (
        <div className="calculator-container">
            <CalculatorDisplay calcDisplay={calcDisplay} />
            <div className="calculator-btns">
                <CalculatorRow btns={[7, 8, 9]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={[4, 5, 6]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={[1, 2, 3]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={["Del", 0, "="]} setCalcDisplay={setCalcDisplay} />
            </div>
        </div>
    )
}

export default Calculator
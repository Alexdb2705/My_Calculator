import CalculatorRow from "./CalculatorRow.jsx"
import CalculatorDisplay from "./CalculatorDisplay.jsx"
import '../Calculator.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState([])

    useEffect(() => {
        console.log(calcDisplay)
        if (calcDisplay[calcDisplay.length - 1] === "Del") {
            const remDisplay = calcDisplay.splice(0, calcDisplay.length - 2)
            setCalcDisplay(remDisplay)
        }
    }, [calcDisplay])

    return (
        <div className="calculator-container">
            <CalculatorDisplay calcDisplay={calcDisplay} />
            <div className="calculator-btns">
                <CalculatorRow btns={[7, 8, 9, "+"]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={[4, 5, 6, "-"]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={[1, 2, 3, "x"]} setCalcDisplay={setCalcDisplay} />
                <CalculatorRow btns={["Del", 0, "=", "/"]} setCalcDisplay={setCalcDisplay} />
            </div>
        </div>
    )
}

export default Calculator
import CalculatorRow from "./CalculatorRow.jsx"
import CalculatorDisplay from "./CalculatorDisplay.jsx"
import '../Calculator.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState([])

    useEffect(() => {
        console.log(calcDisplay)
        const lastItem = calcDisplay[calcDisplay.length-1]
        const prevDisplay = calcDisplay.filter((element) => {return (element !== lastItem)})
        if (typeof(lastItem) == "number") {
            console.log("Number")
        }
        else if (lastItem == "Del") {
            const prevLastItem = prevDisplay[prevDisplay.length - 1]
            const remDisplay = prevDisplay.filter((element) => {return (element !== prevLastItem)})
            setCalcDisplay(remDisplay)
        }
    }, [calcDisplay])

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
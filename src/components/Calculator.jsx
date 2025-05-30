import CalculatorRow from "./CalculatorRow.jsx"
import CalculatorTop from "./CalculatorTop.jsx"
import '../Calculator.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState("")

    useEffect(() => {
        console.log(calcDisplay)
    }, [calcDisplay])

    return (
        <div className="calculator-container">
            <CalculatorTop calcDisplay={calcDisplay} setCalcDisplay={setCalcDisplay}/>
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
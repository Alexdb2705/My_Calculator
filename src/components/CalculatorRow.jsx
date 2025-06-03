import { useEffect, useState } from 'react'
import '../CalculatorRow.css'
// import { useParams } from 'react-router-dom'

function CalculatorRow({ btns, setCalcDisplay }) {
    const buttons = btns

    const Clicker = (e) => {
        e !== "Del" & e !== "="
            ? setCalcDisplay(
                (prevDisplay) => {
                    if (e === 0 & prevDisplay.length === 1 & Number(prevDisplay[0]) === 0) { return prevDisplay }
                    else { return (prevDisplay + `${e}`) }
                }
            )
            : e === "Del"
                ? setCalcDisplay(
                    (prevDisplay) => (prevDisplay.slice(0, prevDisplay.length - 1))
                )
                : setCalcDisplay(
                    (prevDisplay) => {
                        if (prevDisplay.indexOf("+") >= 1) {
                            const idx = prevDisplay.indexOf("+")
                            return String(Number(prevDisplay.slice(0, idx)) + Number(prevDisplay.slice(idx + 1))).slice(0, 15)
                        }
                        if (prevDisplay.indexOf("-") >= 1) {
                            const idx = prevDisplay.indexOf("-")
                            return String(Number(prevDisplay.slice(0, idx)) - Number(prevDisplay.slice(idx + 1))).slice(0, 15)
                        }
                        if (prevDisplay.indexOf("x") >= 1) {
                            const idx = prevDisplay.indexOf("x")
                            return String(Number(prevDisplay.slice(0, idx)) * Number(prevDisplay.slice(idx + 1))).slice(0, 15)
                        }
                        if (prevDisplay.indexOf("/") >= 1) {
                            const idx = prevDisplay.indexOf("/")
                            return String(Number(prevDisplay.slice(0, idx)) / Number(prevDisplay.slice(idx + 1))).slice(0, 15)
                        }

                        return prevDisplay
                    }
                )
    }

    return (
        <div className="calculator-row">
            {
                buttons?.map((btn) => (
                    <button onClick={() => {
                        Clicker(btn)
                    }} key={btn} id={`b${btn}`}>{btn}</button>
                ))
            }
        </div>
    )
}

export default CalculatorRow
import { useEffect, useState } from 'react'
import '../CalculatorRow.css'
// import { useParams } from 'react-router-dom'

function CalculatorRow({ btns, setCalcDisplay, calcDisplay }) {
    const buttons = btns

    // useEffect(() => {
    //     const Clicking = () => {
    //         console.log(`${calcDisplay}`)
    //     }
    //     Clicking()
    // }, [calcDisplay])

    const Clicker = (e) => {
        typeof(e) != "string" && setCalcDisplay((prevDisplay) => ([
            ...prevDisplay,
            e
        ]))
        e == "Del" && setCalcDisplay((prevDisplay) => {
            const longitud_1 = prevDisplay.length - 1
            prevDisplay[longitud_1] = `aaa${prevDisplay[longitud_1]}`
            return prevDisplay.filter((element) => !element.startsWith("aaa"))
        })
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
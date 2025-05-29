import { useEffect, useState } from 'react'
import '../CalculatorRow.css'
// import { useParams } from 'react-router-dom'

function CalculatorRow({ btns, setCalcDisplay, calcDisplay }) {
    const buttons = btns

    const Clicker = (e) => {
        setCalcDisplay((prevDisplay) => ([
            ...prevDisplay,
            e
        ])
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
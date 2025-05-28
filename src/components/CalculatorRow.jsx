import { useEffect, useState } from 'react'
import '../CalculatorRow.css'
// import { useParams } from 'react-router-dom'

function CalculatorRow({ btns, setCalcDisplay }) {
    const [buttons, setButtons] = useState([])

    useEffect(() => {
        setButtons(btns)
    }, [])

    return (
        <div className="calculator-row">
            {
                buttons?.map((btn) => (
                    <button key={btn} id={`b${btn}`}>{btn}</button>
                ))
            }
        </div>
    )
}

export default CalculatorRow
import React from 'react'
import investmentLogo from "../assets/investment-calculator-logo.png"

function CalcLogo() {
    return (
        <section className='pt-5 w-full flex flex-col justify-center content-center items-center'>
            <img className="h-20 w-20 mb-5" src={investmentLogo} />
            <h1 className='text-xl'>Investment Calculator</h1>
        </section>
    )
}

export default CalcLogo
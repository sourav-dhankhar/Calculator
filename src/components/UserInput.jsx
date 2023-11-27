import React, { useState } from 'react'
import InputTag from './InputTag'

function UserInput(props) {
    return (
        <section className='w-full flex flex-col justify-center content-center items-center mt-10 mb-10'>
            <div className='bg-green-800 p-10 grid grid-cols-2 gap-4 rounded-xl'>
                <InputTag onChangeInput={props.onChangeInput} value={props.userInput.initialInvestment} id="intialInvestment" label="Initial Investment" sign="&#8377;" placeholder="0.00" />
                <InputTag onChangeInput={props.onChangeInput} value={props.userInput.annualInvestment} id="annualInvestment" label="Annual Investment" sign="&#8377;" placeholder="0.00" />
                <InputTag onChangeInput={props.onChangeInput} value={props.userInput.expectedReturn} id="expectedReturn" label="Expected Return" sign="%" placeholder="0.00" />
                <InputTag onChangeInput={props.onChangeInput} value={props.userInput.duration} id="duration" label="Duration" />
            </div>
        </section>
    )
}

export default UserInput
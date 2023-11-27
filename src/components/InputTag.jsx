import React from 'react'

function InputTag(props) {
    function handleInputChange(event) {
        const numberValue = +event.target.value;
        props.onChangeInput(event.target.id, numberValue);
    }
    return (
        <div>
            <label htmlFor={props.label.toLowerCase()} className="block text-sm font-medium leading-6 text-white-900">
                {props.label.toUpperCase()}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                {props.sign && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">{props.sign}</span>
                </div>}
                <input
                    type="number"
                    name={props.label.toLowerCase()}
                    id={props.id}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={props.placeholder ? props.placeholder : "0"}
                    value={props.value}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default InputTag
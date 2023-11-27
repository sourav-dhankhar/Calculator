import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function Result({ input }) {
    const results = calculateInvestmentResults(input);

    const initialInvestment = results.length > 0 ? results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment : 0;
    return (
        <div className="relative overflow-x-auto flex justify-center">
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-0.5">
                <thead className="text-xs text-green-800 dark:bg-gray-800 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Investment Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Interest
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Interest
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Invested Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((yearData) => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                        return (
                            <tr key={yearData.year} className=" dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4">
                                    {yearData.year}
                                </th>
                                <td className="px-6 py-4">
                                    {formatter.format(yearData.valueEndOfYear)}
                                </td>
                                <td className="px-6 py-4">
                                    {formatter.format(yearData.interest)}
                                </td>
                                <td className="px-6 py-4">
                                    {formatter.format(totalInterest)}
                                </td>
                                <td className="px-6 py-4">
                                    {formatter.format(totalAmountInvested)}
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Result
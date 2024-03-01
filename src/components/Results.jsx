import React from "react";
import {calculateInvestmentResults, formatter} from "../util/investment.js";

function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultsData[0].valueEndOfYear - 
        resultsData[0].interest - 
        resultsData[0].annualInvestment;
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year) </th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((y) => {
                    const totalInterest = 
                        y.valueEndOfYear - 
                        y.annualInvestment * 
                        y.year -
                        initialInvestment;
                    
                    const totalAmountInvested =
                        y.valueEndOfYear - totalInterest;

                    return(
                        <tr key={y.year}>
                            <td>{formatter.format(y.year)}</td>
                            <td>{formatter.format(y.valueEndOfYear)}</td>
                            <td>{formatter.format(y.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Results;
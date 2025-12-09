import React from 'react'
import { useEffect, useState } from 'react';
import { prepareExpenseLineChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../../components/Charts/CustomLineChart';

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        console.log("ExpenseOverview received transactions:", transactions); // Add this
        const result = prepareExpenseLineChartData(transactions);
        console.log("Transformed chartData:", result); // Add this
        setChartData(result);

        return () => { };
    }, [transactions]);

    return (
    <div className="card">
        <div className="flex items-center justify-between">
            <div className="">
                <h5 className="text-lg">Expense Overview</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                    Track your spending trends over time and gain insights into where your money goes.
                </p>
            </div>

            <button className="add-btn" onClick={onExpenseIncome}>
                <LuPlus className="text-lg" />
                Add Expense
            </button>
        </div>
        <div className="mt-10">
            {chartData && chartData.length > 0 ? (
                <CustomLineChart data={chartData} />
            ) : (
                <div className="text-center text-gray-500 py-8">No expense data available</div>
            )}
        </div>
    </div>
    );
};

export default ExpenseOverview
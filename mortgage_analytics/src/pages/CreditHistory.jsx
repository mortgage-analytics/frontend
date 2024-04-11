import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

const CreditHistory = () => {
    const data = [
        { month: "Jan", creditScore: 750, creditLimit: 5000 },
        { month: "Feb", creditScore: 760, creditLimit: 5200 },
        { month: "Mar", creditScore: 770, creditLimit: 5400 },
        { month: "Apr", creditScore: 780, creditLimit: 5600 },
        { month: "May", creditScore: 790, creditLimit: 5800 },
        { month: "Jun", creditScore: 800, creditLimit: 6000 },
        { month: "Jul", creditScore: 810, creditLimit: 6200 },
        { month: "Aug", creditScore: 820, creditLimit: 6400 },
        { month: "Sep", creditScore: 830, creditLimit: 6600 },
        { month: "Oct", creditScore: 840, creditLimit: 6800 },
        { month: "Nov", creditScore: 850, creditLimit: 7000 },
        { month: "Dec", creditScore: 860, creditLimit: 7200 },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <LineChart
            width={600}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="creditScore" name="Credit Score" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="creditLimit" name="Credit Limit" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default CreditHistory;

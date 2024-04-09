import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Text
} from "recharts";

const IncomeVerification = () => {
    const data = [
        { category: "Under $30k", count: 250 },
        { category: "$30k - $50k", count: 500 },
        { category: "$50k - $70k", count: 750 },
        { category: "Over $70k", count: 300 },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: '100px' }}>
            <Text x={300} y={20} textAnchor="middle" fontSize={20}>Income Verification</Text>
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 30,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default IncomeVerification;

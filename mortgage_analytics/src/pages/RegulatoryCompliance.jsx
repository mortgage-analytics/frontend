import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

const RegulatoryCompliance = () => {
    const data = [
        { appliance: "Appliance A", compliance: 90 },
        { appliance: "Appliance B", compliance: 85 },
        { appliance: "Appliance C", compliance: 70 },
        { appliance: "Appliance D", compliance: 95 },
    ];

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: '100px' }}>
            <BarChart
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
                <XAxis dataKey="appliance" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="compliance" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default RegulatoryCompliance;

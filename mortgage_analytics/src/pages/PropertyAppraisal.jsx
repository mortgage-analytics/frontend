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

const PropertyAppraisal = () => {
    // Realistic data
    const data = [
        { propertyType: "Residential", value: 250000 },
        { propertyType: "Commercial", value: 500000 },
        { propertyType: "Industrial", value: 750000 },
        { propertyType: "Vacant Land", value: 150000 },
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
                <XAxis dataKey="propertyType" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PropertyAppraisal;

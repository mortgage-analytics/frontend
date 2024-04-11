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

const ApplicantWorkHistory = () => {
    const data = [
        { position: "Software Engineer", duration: 3 },
        { position: "Project Manager", duration: 4 },
        { position: "Data Analyst", duration: 2 },
        { position: "UX/UI Designer", duration: 2.5 },
        { position: "Systems Administrator", duration: 3 },
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
                <XAxis dataKey="position" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="duration" name="Duration (Years)" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default ApplicantWorkHistory;

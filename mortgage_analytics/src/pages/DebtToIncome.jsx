import React from 'react';
import { ScatterChart, CartesianGrid, XAxis, YAxis, Scatter } from 'recharts';

const data = [
  { income: 50000, debt: 20000 },
  { income: 52000, debt: 22000 },
  { income: 55000, debt: 25000 },
  { income: 58000, debt: 28000 },
  { income: 60000, debt: 30000 },
  { income: 63000, debt: 32000 },
  { income: 65000, debt: 35000 },
  { income: 68000, debt: 38000 },
];

const DebtToIncome = () => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
    <ScatterChart width={600} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
            type="number"
            dataKey="income"
            name="Income"
            label={{
                value: 'Income',
                position: 'insideBottom',
                style: { fill: 'blue' }
            }}
        />
        <YAxis
            type="number"
            dataKey="debt"
            name="Debt"
            label={{
                value: 'Debt',
                angle: -90,
                position: 'insideLeft',
                style: { fill: 'blue' }
            }}
        />
        <Scatter data={data} fill="#8884d8" />
    </ScatterChart>
</div>

);

export default DebtToIncome;

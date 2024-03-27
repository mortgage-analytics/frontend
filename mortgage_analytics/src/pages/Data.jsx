import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import { render } from "react-dom";
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 700 },//RED
  { name: 'Group B', value: 300 },//GREEN
  { name: 'Group C', value: 500 },//YELLOW
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'A3', value: 200 },
  { name: 'B1', value: 80 },
  { name: 'B2', value: 95 },
  { name: 'B3', value: 50 },
  { name: 'B4', value: 37 },
  { name: 'C1', value: 15 },
  { name: 'C2', value: 20 },
  { name: 'C3', value: 30 },
];


const COLORS = ['#FF0000', '#00C49F', '#FFBB28'];

const INNERCOLORS = ['#FF0000', '#FF0000', '#FF0000', '#FFBB28', '#FFBB28', '#FFBB28', '#00C49F', '#00C49F', '#00C49F','#00C49F'];

const Data = () => {
  const redBottlenecks = ['Credit History', 'Income Verification', 'Debt To Income Ratio']; 
  const yellowBottlenecks = ['Property Appraisal', 'Documentation Requirements', 'Market Conditions']; 
  const greenBottlenecks = ['Regulatory Compliance', 'Applicant Work History', 'Down Payment Issues', 'Stringent Underwriting Standards'];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <header>
              <h1 style={{ textAlign: "centre" }}>Bottlenecks</h1>
            </header>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>There is a wide variety of bottlenecks that can occur during the mortgage application process.</p>
            <p>Here is a summary of the bottlenecks based on wait times.</p>
            <p>Click on a link to discover more information.</p>

            <main style={{ marginTop: "20px", marginLeft: "100px", textAlign: "center" }}>
            <div style={{ backgroundColor: 'red', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
            <p>
              Red Bottlenecks (Long Wait Times)
            </p>
            <ul>
              {redBottlenecks.map((redBottlenecks, index) => (
              <li key={index}>
                <a href={`/${redBottlenecks.replace(/\s+/g, '-').toLowerCase()}`}>{redBottlenecks}</a>
              </li>
              ))}
            </ul>
            </div>
            <div style={{ backgroundColor: 'yellow', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
            <p>
       Yellow Bottlenecks (Medium Wait Times)
      </p>
      <ul>
        {yellowBottlenecks.map((yellowBottlenecks, index) => (
          <li key={index}>
            <a href={`/${yellowBottlenecks}`}>{yellowBottlenecks}</a>
          </li>
        ))}
      </ul>
      </div>
      <div style={{ backgroundColor: 'green', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <p>
       Green Bottlenecks (Short Wait Times)
      </p>
      <ul>
        {greenBottlenecks.map((greenBottlenecks, index) => (
          <li key={index}>
            <a href={`/${greenBottlenecks}`}>{greenBottlenecks}</a>
          </li>
        ))}
      </ul>
      </div>
            </main>
          </Col>
          <Col>
            <PieChart width={400} height={400}>
              <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">          
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
              </Pie> 
              <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label>
                {data02.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={INNERCOLORS[index % INNERCOLORS.length]} />
                    ))}
              </Pie>                 
            </PieChart>
          </Col>  
        </Row>
      </Container>
    </div>

  );
};

export default Data;




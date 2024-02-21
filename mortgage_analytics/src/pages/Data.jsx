import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import { render } from "react-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

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
  { name: 'B2', value: 70 },
  { name: 'B3', value: 50 },
  { name: 'B4', value: 95 },
  { name: 'C1', value: 15 },
  { name: 'C2', value: 20 },
  { name: 'C3', value: 30 },
];

const COLORS = ['#FF0000', '#00C49F', '#FFBB28'];

const INNERCOLORS = ['#FF0000', '#FF0000', '#FF0000', '#00C49F', '#00C49F', '#00C49F','#00C49F', '#FFBB28', '#FFBB28', '#FFBB28'];

const Data = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <header>
              <h1 style={{ textAlign: "centre" }}>Bottlenecks</h1>
            </header>

            <main style={{ marginTop: "20px", marginLeft: "100px", textAlign: "center" }}>
              <p style={{ textAlign: "left" }}>Red (100+ Applications)</p>
              <ul style={{ textAlign: "left" }}>
                <li>Credit History and Score</li>
                <li>Income Verification</li>
                <li>Debt to Income Ratio</li>
              </ul>
              <p style={{ textAlign: "left" }}><span className="yellow-underline"><span className="black-highlight">Yellow (50-99 Applications)</span></span></p>
              <ul style={{ textAlign: "left" }}>
                <li>Property Appraisal</li>
                <li>Documentation Requirements</li>
                <li>Market Conditions</li>
              </ul>
              <p style={{ textAlign: "left" }}><span className="green-underline">Green (1-49 Applications)</span></p>
              <ul style={{ textAlign: "left" }}>
                <li>Regulatory Compliance</li>
                <li>Applicant Work History</li>
                <li>Down Payment Issues</li>
                <li>Stringent Underwriting Standards</li>
              </ul>
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




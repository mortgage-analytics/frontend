import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import { render } from "react-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

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
              <p style={{ textAlign: "left" }}>Red</p>
              <ul style={{ textAlign: "left" }}>
                <li>Credit History and Score</li>
                <li>Income Verification</li>
                <li>Debt to Income Ratio</li>
              </ul>
              <p style={{ textAlign: "left" }}><span className="yellow-underline"><span className="black-highlight">Yellow</span></span></p>
              <ul style={{ textAlign: "left" }}>
                <li>Property Appraisal</li>
                <li>Documentation Requirements</li>
                <li>Market Conditions</li>
              </ul>
              <p style={{ textAlign: "left" }}><span className="green-underline">Green</span></p>
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
              <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
              <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
          </Col>  
        </Row>
      </Container>
    </div>

  );
};

export default Data;




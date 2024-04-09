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

const INNERCOLORS = ['#FF0000', '#FF0000', '#FF0000', '#FFBB28', '#FFBB28', '#FFBB28', '#00C49F', '#00C49F', '#00C49F', '#00C49F'];

const Data = () => {
  const redBottlenecks = ['Credit History', 'Income Verification', 'Debt To Income Ratio'];
  const yellowBottlenecks = ['Property Appraisal', 'Documentation Requirements', 'Market Conditions'];
  const greenBottlenecks = ['Regulatory Compliance', 'Applicant Work History', 'Down Payment Issues', 'Stringent Underwriting Standards'];

  return (
    <div>
      <Container>
        <Row>
          <Col style={{disply:'flex', justifyContent:'left'}}>
            <header>
            <br></br>
              <h1>Bottlenecks</h1>
            </header>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>There is a wide variety of bottlenecks that can occur during the mortgage application process.</p>
            <p>Here is a summary of the bottlenecks based on wait times.</p>
            <p>Click on a link to discover more information.</p>
              <div style={{ backgroundColor: '#FA5F55', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                <h5>
                  Red Bottlenecks (Long Wait Times)
                </h5>
                <ul>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/CreditHistory">Credit History</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/IncomeVerification">Income Verification</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/DebtToIncome">Debt To Income Ratio</a></li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#FFBB28', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                <h5>
                  Yellow Bottlenecks (Medium Wait Times)
                </h5>
                <ul>
                <li>   <a style={{color:"black", textAlign:"left"}} href="/PropertyAppraisal">Property Appraisal</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/DocumentationRequirements">Documentation Requirements</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/MarketConditions">Market Conditions</a></li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#00C49F', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                <h5>
                  Green Bottlenecks (Short Wait Times)
                </h5>
                <ul>
                <li>   <a style={{color:"black", textAlign:"left"}} href="/RegulatoryCompliance">Regulatory Compliance</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/ApplicantWorkHistory">Applicant Work History</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/DownPaymentIssues">Down Payment Issues</a></li>
                  <li>   <a style={{color:"black", textAlign:"left"}} href="/StringentUnderwritingStandards">Stringent Underwriting Standards</a></li>
                </ul>
              </div>
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




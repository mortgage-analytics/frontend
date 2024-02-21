import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { PureComponent } from 'react';
import { render } from "react-dom";
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const lineData = [
    {
      name: 'December 2015',
      Lead: 12,
      Application: 2,
      amt: 2400,
    },
    {
      name: 'February 2015',
      Lead: 12,
      Application: 5,
      amt: 2210,
    },
    {
      name: 'January 2015',
      Lead: 7,
      Application: 0,
      amt: 2290,
    },
  ];

const LeadVApp = () => {
    return (
        <div className="login-container">
            <Form>
                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Continue</button>
            </Form>
        <Row>
          <LineChart
            width={500}
            height={300}
            data={lineData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Lead" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Application" stroke="#82ca9d" />
          </LineChart>
        </Row>

        </div>
    );
};

export default LeadVApp;
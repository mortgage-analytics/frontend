import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCookie } from '../util/Cookie'

const baseURL = "https://mortgagebackend.azurewebsites.net/api/data/applications/all";


const data01 = [
    { name: 'Group A', value: 700 },//RED
    { name: 'Group B', value: 300 },//GREEN
    { name: 'Group C', value: 500 },//YELLOW
  ];

const COLORS = ['#FF0000', '#00C49F', '#FFBB28'];

const data = [
    {
      "applicationType": "CREDIT SUBMISSION",
      "Applications": 52
    },
    {
      "applicationType": "LOAN OFFER",
      "Applications": 27
    },
    {
      "applicationType": "ADVISOR REVIEW",
      "Applications": 114
    },
    {
      "applicationType": "COMPLETE",
      "Applications": 26
    },
    {
      "applicationType": "INFORMATION GATHERING",
      "Applications": 120
    },
    {
      "applicationType": "RECOMMENDATION",
      "Applications": 7
    },
    {
      "applicationType": "DRAWDOWN",
      "Applications": 6
    }
  ]

const Overview = () => {

    const [applicationData, setApplicationData] = useState([]);

    useEffect(() => {
        async function fetchApplicationData() {
            try {
                const response = await axios.get(baseURL);
                setApplicationData(response.data); // Assuming response.data contains the data
                console.log(applicationData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchApplicationData();

    }, []);

    return (
        <Container fluid style={{ textAlign:"center"}}>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={6}>
                    <div>
                        <br></br>
                        <h1>Data Overview</h1>
                        
                    </div>
                </Col>
                
            </Row>
            <br></br>
            <Row className="justify-content-center">
                <BarChart width={1300} height={300} data={data} >
                    <XAxis dataKey="applicationType" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Applications" fill="#8884d8" />
                </BarChart>
            </Row>
            <Row className="justify-content-center">
            <Col  lg={8}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Application Stage</th>
                        <th>Application type</th>
                        <th>Mortgage Amt</th>
                        <th>Application Stage</th>
                        <th>Lead Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicationData.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th><a href={`.${window.location.pathname}/applications/${index}`}>
                             {item.applicationStage}
                            </a>
                              
                            </th>
                            <th key={index}>{item.applicationType}</th>
                            <th key={index}>{item.mortgageAmountProposed}</th>
                            <th key={index}>{item.applicationStatus}</th>
                            <th key={index}>{item.leadSource}</th>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                </Col>
            </Row> 
        </Container>
    );
};

export default Overview;
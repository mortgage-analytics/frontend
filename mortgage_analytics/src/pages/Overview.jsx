import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { getCookie } from '../util/Cookie'

const baseURL = "https://mortgagebackend.azurewebsites.net/api/data/applications/all";



const Overview = () => {

    const [applicationData, setApplicationData] = useState([]);

    useEffect(() => {
        async function fetchApplicationData() {
            try {
                const response = await axios.get(baseURL, {headers: {Authorization: "Bearer " + getCookie("AuthToken")}});
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
                            <tr>
                            <th key={index}>{index+1}</th>
                            <th key={index}>{item.applicationType}</th>
                            <th key={index}>{item.applicationStage}</th>
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


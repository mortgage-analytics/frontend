import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'
import Photo1 from '../assets/mortgage-accounts-in-arrears-as-held-by-banks-and-non-banks.png'
import Photo2 from '../assets/units.png'
import Photo3 from '../assets/number-of-household-sector-tools52eaed134644629bacc1ff0000269695.png'
import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, Rectangle, ResponsiveContainer } from 'recharts';

const dataWithoutUV = [
    {
      name: 'Credit Check',
      Delay: 2400,
      amt: 2400,
    },
    {
      name: 'Property Appraisal',
      Delay: 1398,
      amt: 2210,
    },
    {
      name: 'Income Verification',
      Delay: 9800,
      amt: 2290,
    },
    {
      name: 'Loan Approval',
      Delay: 3908,
      amt: 2000,
    },
    {
      name: 'Insurance Processing',
      Delay: 4800,
      amt: 2181,
    },
    {
      name: 'Document Preparation',
      Delay: 3800,
      amt: 2500,
    },
    {
      name: 'Legal Review',
      Delay: 4300,
      amt: 2100,
    },
  ];
  
  

const lineData = [
    {
        name: 'January 2020',
        Lead: 9,
        Application: 3,
        amt: 2350,
    },
    {
        name: 'July 2020',
        Lead: 11,
        Application: 7,
        amt: 2180,
    },
    {
        name: 'January 2021',
        Lead: 6,
        Application: 3,
        amt: 2275,
    },
    {
        name: 'July 2021',
        Lead: 14,
        Application: 8,
        amt: 2430,
    },
    {
        name: 'January 2022',
        Lead: 6,
        Application: 5,
        amt: 2215,
    },
    {
        name: 'July 2022',
        Lead: 13,
        Application: 4,
        amt: 2385,
    },
    {
        name: 'January 2023',
        Lead: 10,
        Application: 5,
        amt: 2298,
    },
    {
        name: 'July 2023',
        Lead: 7,
        Application: 2,
        amt: 2187,
    },
    {
        name: 'January 2024',
        Lead: 12,
        Application: 6,
        amt: 2455,
    },
    {
        name: 'February 2024',
        Lead: 9,
        Application: 3,
        amt: 2310,
    }
];

const Home = () => {
    return (
        <div>
            <Container fluid style={{ textAlign: "center" }}>
                <br></br>
                {/* <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 classname="display-1">Introduction</h1>
                    </Col>
                </Row> */}
                {/* <br></br> */}
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1>Introduction</h1>
                        <p>
                        Welcome to Mortgage Analytics, the premier destination where innovation meets expertise to redefine the mortgage experience. Our platform is designed with one goal in mind: to empower you on your journey to homeownership. We understand that the path to owning your dream home can often be fraught with challenges. From navigating the labyrinth of paperwork to enduring the uncertainties of approval processes and facing the frustrations of delays, the traditional mortgage journey can feel overwhelming.
                        </p>
                        <p>
                        At Mortgage Analytics, we're committed to changing that narrative. We've created a space where efficiency, transparency, and customer-centricity converge to make your homeownership dreams a reality. With Mortgage Analytics, you're not just a borrower; you're a valued partner in a journey towards achieving your aspirations of owning a home.
                        </p>
                        <br></br>
                        <br></br>
                        <div style={{display: "flex", justifyContent:"center"}}>
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
                        </div>
                        <br></br>
                        <br></br>
                        <h1>Streamlining Mortgages</h1>
                        <p>
                        At Mortgage Analytics, we're passionate about streamlining your path to homeownership. Our innovative platform integrates cutting-edge technology, data analytics, and industry expertise to dissect the mortgage process from every angle. We leave no stone unturned in identifying bottlenecks, inefficiencies, and pain points that often plague the traditional mortgage journey.
                        </p>
                        <p>
                        By leveraging our deep understanding of the mortgage landscape, we've developed tailored solutions to address these challenges head-on. From simplifying the application process to expediting approvals and minimizing paperwork, Mortgage Analytics is committed to making your journey smoother, faster, and more intuitive.
                        </p>
                        <p>
                        We believe that homeownership should be within reach for everyone, and our mission is to remove the barriers that stand in your way. With Mortgage Analytics, you can navigate the mortgage landscape with confidence, knowing that you have a dedicated partner by your side every step of the way.
                        </p>
                        <br></br>
                        <br></br>
                        <div style={{display: "flex", justifyContent:"center"}}>
                            <BarChart
                                width={500}
                                height={300}
                                data={dataWithoutUV}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Delay" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            </BarChart>
                        </div>
                        <br></br>
                        <br></br>
                        <h1>Our Mission </h1>
                        <p>
                        When it comes to navigating the complexities of the mortgage process, Mortgage Analytics is your trusted ally. Whether you're a first-time buyer dipping your toes into the real estate market, a seasoned homeowner looking to refinance, or an investor seeking financing for your next property venture, we're here to support you.
                        </p>
                        <p>
                        Our team of experienced professionals is committed to providing personalized guidance and support tailored to your unique needs and circumstances. We understand that every borrower is different, and we take the time to listen, understand, and guide you through the process with care and expertise.
                        </p>
                        <p>
                        With Mortgage Analytics, you can say goodbye to the frustrations of the past and embrace a new era of homeownership. We're not just here to facilitate transactions; we're here to build relationships, foster trust, and help you achieve your homeownership goals. So why wait? Dive into the Mortgage Analytics experience today, and let's embark on the journey to your new home together.
                        </p>
                    </Col>
                </Row>

                

            </Container>
            <br></br>
        </div>
    );
};

export default Home;
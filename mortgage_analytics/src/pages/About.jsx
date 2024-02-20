import { Container, Row, Col } from 'react-bootstrap';
import Photo1 from '../assets/about-image.jpg';

const About = () => {
    return (
        <Container fluid style={{marginTop: "100px"}}>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <div>
                        <h1>About Us</h1>
                        <h5>Welcome to Group 28's Mortgage Analytics</h5>
                        <p>
                            We are a team consisting of 11 members committed to improving the mortgage application system. Our mission is to uncover trends and provide meaningful recommendations that enhance the efficiency of the current process.
                        </p>
                        <p>
                            Through our collaborative efforts and innovative thinking, we strive to deepen our understanding of mortgage analytics. Our goal is to deliver practical solutions that enhance the current process.
                        </p>
                        <p>
                            With a shared vision to improve the mortgage application process, our team is driven by passion and determination. Join us on our journey as we work towards creating a more efficient and smooth experience for applicants and lenders alike.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Photo1} style={{ width: "100%", height: "auto", borderRadius: "5px" }} alt="About page" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;


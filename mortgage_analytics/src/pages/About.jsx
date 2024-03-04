import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid style={{marginTop: "100px", textAlign:"center"}}>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={6}>
                    <div>
                        <h1>About Us</h1>
                        <h5>Welcome to Group 28's Mortgage Analytics</h5>
                        <div style={{textAlign:"left"}}>
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
                        
                    </div>
                </Col>
                {/* <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Photo1} style={{ width: "100%", height: "auto", borderRadius: "5px" }} alt="About page" />
                </Col> */}
                
            </Row>
            <br></br>
            <Row className="justify-content-center">
            <Col  lg={6}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>@github</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Nehal</td>
                        <td>Batra</td>
                        <td>Team Leader</td>
                        <td>@nbat07</td>
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>Steve</td>
                        <td>Thomas</td>
                        <td>Frontend Architect</td>
                        <td>@stevethomas13</td>
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>Erik</td>
                        <td>Larkin</td>
                        <td>DevOps Engineer</td>
                        <td>@erik-larkin</td>
                        </tr>

                        <tr>
                        <td>4</td>
                        <td>Manuel </td>
                        <td>Da Silva</td>
                        <td>Data Architect</td>
                        <td>@MFranA</td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <td>Leon</td>
                        <td>Bryne</td>
                        <td>Backend Architect</td>
                        <td>@LeonByrne</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <td>Mohamend</td>
                        <td>Ali</td>
                        <td>Frontend Developer</td>
                        <td>@mohamed-k-ali</td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <td>Hazel </td>
                        <td>Austin</td>
                        <td>Frontend Developer</td>
                        <td>@austinhazel</td>
                        </tr>


                        <tr>
                        <td>8</td>
                        <td>Andrew </td>
                        <td>Furey</td>
                        <td>Machine Learning Developer</td>
                        <td>@andrewfurey21</td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <td>Peter </td>
                        <td>Dillon</td>
                        <td>Backend Developer</td>
                        <td>@peterdillonn</td>
                        </tr>

                        <tr>
                        <td>10</td>
                        <td>Daniel </td>
                        <td>Egenton</td>
                        <td>Backend Developer</td>
                        <td>@Egentond</td>
                        </tr>

                        <tr>
                        <td>11</td>
                        <td>Robert </td>
                        <td>Hartnett</td>
                        <td>Machine Learning Developer</td>
                        <td>@Hartnero</td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default About;


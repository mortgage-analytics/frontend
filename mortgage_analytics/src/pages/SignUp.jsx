import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const SignUp = () => {
    return (
        <Container className="d-flex justify-content-center" style={{marginTop: "100px"}}>
        <div>
            <h3 className="text-centre mb-3"> Sign up</h3>
        <Form style={{width: "400px"}}>
            <Row>
            <Col>
            <div className='mb-3'>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                </div>
                </Col>
                <Col>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                </Col>
                </Row>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <div className="mb-3"></div>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <div className="mt-3" style={{width: "420px"}}>
                <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </Form>
            <p style={{textAlign: "center"}} className="mt-4">
            Already have an account?   <a href="/login">Log in</a> 
            </p>
            </div>
            </Container>
  
        );
    };
    
    export default SignUp;
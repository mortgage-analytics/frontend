import '../css/Login.css';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return (
        <div className="login-container">
            <h6>Welcome Back</h6>
            <h4>Sign in to your account</h4>

            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Continue</button>
            </Form>

            <p className="forgot-password">
                <a href="#">Forgot your password?</a> 
            </p>

            <p className="sign-up">
            Don't have an account?   <a href="#">Sign up</a> 
            </p>

        </div>
    );
};

export default Login;
import '../css/Login.css';
import { useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';

const baseURL = "http://localhost:8080/api/auth/signin";

const Login = () => {

    const [form, setForm] = useState({});


    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }    

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(baseURL, {
          email:"hello@hello.com",
          password:"abc123absN!"
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="login-container">
            <h6>Welcome Back</h6>
            <h4>Sign in to your account</h4>

            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)} 
                        type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        value={form.password}
                        onChange={(e) => setField('password', e.target.value)} 
                        type="password" />
                </Form.Group>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Continue</button>
            </Form>

            <p className="forgot-password">
                <a href="#">Forgot your password?</a> 
            </p>

            <p className="sign-up">
            Don't have an account?   <a href="/sign-up">Sign up</a> 
            </p>

        </div>
    );
};

export default Login;
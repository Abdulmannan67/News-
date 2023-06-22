import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import noteContext from '../context/noteContext'
import { useContext } from "react";


const Login = () => {
  const context = useContext(noteContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const { logIn , signInWithGoogle } = context;
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      
      setError(err.message);
      }
  };

  const handleGoogleSignIn = async (e) => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center mt-5 text-center" >
      <div>
      <div className="p-1 box">
        <h2 className="mb-3">News+ Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className="d-flex justify-content-center" >
          <GoogleButton
            className="g-btn "
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;
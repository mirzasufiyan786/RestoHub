import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarMenu from './NavbarMenu'
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(`http://localhost:3000/login?name=${user.name}&password=${user.password}`);
      const data = await response.json();
      if (data) {
        localStorage.setItem("login",JSON.stringify(data))
        navigate('/list');
        window.location.reload();
      } else {
        alert("Please enter a valid user and password");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <NavbarMenu/>
    <div className='container my-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="User name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

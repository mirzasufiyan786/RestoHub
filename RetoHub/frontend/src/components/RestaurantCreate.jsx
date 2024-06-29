import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu'
export default function RestaurantCreate() {
    const [resto, setResto] = useState({ name: "", mail: "", location: "", rating: "" });

    const onChange = (e) => {
        const { name, value } = e.target;
        setResto((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addResto = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/restaurant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(resto)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setResto({ name: "", mail: "", location: "", rating: "" });
            alert("Data is added successfully")

        } catch (error) {
            console.error('Error adding restaurant:', error);
        }
    };

    return (
        <>
        <NavbarMenu/>
        <div className='container my-5'>
            
            <Form onSubmit={addResto}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name" 
                        value={resto.name}
                        onChange={onChange}
                        placeholder="Restaurant Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="text"
                        name="rating" 
                        value={resto.rating}
                        onChange={onChange}
                        placeholder="Rating"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location" 
                        value={resto.location}
                        onChange={onChange}
                        placeholder="Location"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="mail" 
                        value={resto.mail}
                        onChange={onChange}
                        placeholder="Email"
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

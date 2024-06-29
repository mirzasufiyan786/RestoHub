import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu'
export default function RestaurantUpdate(props) {
  const [list, setList] = useState({ name: "", mail: "", location: "", rating: "" });
  const { id} = useParams();

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurant/'+ id);
        const data = await response.json();
        setList(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

   const upDate = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3000/restaurant/"+ id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(list)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        alert("data is successfully updated")
        setList({ name: "", mail: "", location: "", rating: "" })

    } catch (error) {
        console.error('Error adding restaurant:', error);
    }
};
const handleChange = (e) => {
    const { name, value } = e.target;
    setList(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
    <NavbarMenu/>
    <div className='container'>
        
      <h1 className='text-center'>I'm update</h1>
      <p className='text-center'>Updating restaurant with ID: {id}</p>
      <div className='container my-5'>
            <Form onSubmit={upDate}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name" 
                        value={list.name}
                        placeholder="Restaurant Name"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="text"
                        name="rating" 
                        value={list.rating}
                        placeholder="Rating"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location" 
                        value={list.location}
                        placeholder="Location"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="mail" 
                        value={list.mail}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    </>
  );
}
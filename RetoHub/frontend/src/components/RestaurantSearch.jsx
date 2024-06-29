import React, { useState } from 'react';
import { Table,Form } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu'
export default function RestaurantSearch() {
  const [searchdata, setSearchdata] = useState(null);
  const [noData, setNoData] = useState(false);

  const Search = async (key) => {
    if (key.trim() === "") {
      setSearchdata(null);
      setNoData(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/restaurant?location=' + key);
      const data = await response.json();

      if (data.length > 0) {
        setSearchdata(data);
        setNoData(false);
      } else {
        setSearchdata(null);
        setNoData(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
<>
    <NavbarMenu/>
    <div className='container text-center my-4'>
      
      <h1 className='text-center'>Restaurant Search by Location</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" onChange={(e) => Search(e.target.value)} placeholder="Search restautant" />
      </Form.Group>
      <div>
        {searchdata ? (
          <div className='my-3'>
              <Table striped bordered hover>
             <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Rating</th>
          <th>mail</th>
        </tr>
      </thead>
      <tbody>
            {searchdata.map((restaurant) => (
              <tr  key={restaurant.id}>
              <td>{restaurant.id}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.mail}</td>
            </tr>
            ))}
            </tbody>
            </Table>
          </div>
        ) : null}
        {noData ? <h3>No Data Found</h3> : null}
      </div>
    </div>
    </>
  );
}

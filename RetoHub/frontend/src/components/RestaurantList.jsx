import React, { useState ,useEffect} from 'react'
import { Table, } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Link
} from "react-router-dom";

export default function RestaurantList() {

const [list, setList] = useState(null)
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/restaurant");
    const data = await response.json();
    setList(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
    fetchData();
  }, []);
 
  const deLete = async (id) => {

    try {
        const response = await fetch("http://localhost:3000/restaurant/"+ id, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
       alert("Your data is deleted...?");
        fetchData();

    } catch (error) {
        console.error('Error adding restaurant:', error);
    }
};
  return (
<>
    <NavbarMenu/>
 <div className='container'>
  
    <h1 className='text-center my-4'>Restaurant List</h1>
    {list ? ( 
         <Table striped bordered hover>
             <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Rating</th>
          <th>mail</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        
        
        {list.map((list) => 
        (
          <tr  key={list.id}>
          <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.location}</td>
          <td>{list.rating}</td>
          <td>{list.mail}</td>
          <td><Link to={"/update/"+ list.id}><FontAwesomeIcon icon={faEdit} color='orange'/></Link>
          <Link onClick={()=>deLete(list.id)} className='mx-3 cursor-pointer'><FontAwesomeIcon icon={faTrash} color='red'/></Link>
          </td>
        </tr>
        ))
        }
        </tbody>
        </Table>
      ):
        <p>plaese wait...</p>
    }
 </div>
 </>
  )
}

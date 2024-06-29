import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHome, faList, faPlus, faSearch, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function NavbarMenu() {
  return (
    <div>
       <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/">RestoHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home"><Link className='text-light text-decoration-none' to="/"> <FontAwesomeIcon className="mx-1 text-white" icon={faHome}/>Home</Link></Nav.Link> 
            <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/search"><FontAwesomeIcon className="mx-1 text-white" icon={faSearch}/>Search</Link></Nav.Link>
            <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/list"><FontAwesomeIcon className="mx-1 text-white" icon={faList}/>List</Link></Nav.Link>
            <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/create"><FontAwesomeIcon className="mx-1 text-white"icon={faPlus}/>Create</Link></Nav.Link>
            {/* <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/login"><FontAwesomeIcon className="mx-1 text-white"icon={faUser}/>Login</Link></Nav.Link> */}
            {
              localStorage.getItem('login') ?
              <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/logout"><FontAwesomeIcon className="mx-1 text-white"icon={faUser}/>Logout</Link></Nav.Link> :
              <Nav.Link  href="#link"><Link className='text-light text-decoration-none' to="/login"><FontAwesomeIcon className="mx-1 text-white"icon={faUser}/>Login</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import LogoOutBtn from '../auth/Logout';
import { Container,Nav,NavLink,Navbar,NavbarBrand, Collapse,FormText} from "react-bootstrap";
function NavBar() {




    
    const {loggedIn} = useContext(AuthContext)



    return (
    


<>


<Navbar bg="dark" variant="dark">
    <Container>


    <Navbar.Brand href="#home">   Welcome</Navbar.Brand>
    <Nav className="me-auto">
  
      {loggedIn?      <Nav.Link  href="/">Home</Nav.Link> :  <Nav.Link href="/auth/register">Register</Nav.Link>}
      {loggedIn?   <Nav.Link href="auth/customers">Cart</Nav.Link>  :   <Nav.Link href="/auth/login">Login</Nav.Link>}
   
    
      <Navbar.Collapse className="justify-content-end">
      <div style={{ width: 'rem',}}  >
     
      </div>
    </Navbar.Collapse>
    </Nav>

    {loggedIn?    <LogoOutBtn  className="justify-content-end"/> : " "}
   
    </Container>
  </Navbar>



</>






        

        

  
    )
}

export default NavBar

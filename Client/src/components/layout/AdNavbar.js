import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import LogoOutBtn from '../auth/Logout';
import { Container,Nav,NavLink,Navbar,NavbarBrand, Collapse,FormText} from "react-bootstrap";
import AdLogoOutBtn from '../auth/AdLogout';
function AdNavBar() {

  const AdloggedIn = useContext(AuthContext)

  console.log(" AdloggedIn in adnavbar", AdloggedIn);

    return (

      <>

<Navbar bg="dark" variant="dark">
    <Container>


    <Navbar.Brand href="#home">   {AdloggedIn?" Welcome Admin": " " } </Navbar.Brand>
    <Nav className="me-auto">
  
      {AdloggedIn?      <Nav.Link  href="/">Home</Nav.Link> :  <Nav.Link href="/auth/register">Register</Nav.Link>}
      {AdloggedIn?   <Nav.Link href="auth/customers">Cart</Nav.Link>  :   <Nav.Link href="/admin/adlogin">Login</Nav.Link>}
   
      <Navbar.Collapse className="justify-content-end">
      <div style={{ width: 'rem',}}  >
     
      </div>
    </Navbar.Collapse>
    </Nav>

    {AdloggedIn?    <AdLogoOutBtn  className="justify-content-end"/> : " "}
   
    </Container>
  </Navbar>



</>
       
    )
}

export default AdNavBar

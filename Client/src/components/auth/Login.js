import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';

import { Form, Button, Row, Col, Container, Card, CardGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import NavBar from '../layout/Navbar';
import { useNavigate } from 'react-router';
import { Opacity } from '@material-ui/icons';

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { getLoggedIn } = useContext(AuthContext)

    async function login(e) {

        e.preventDefault()
        try {

            const LoginData = {

                email,
                password,


            }

            await axios.post('http://localhost:5000/auth/login', LoginData)



            await getLoggedIn()

            navigate('/auth/home')
        } catch (err) {
            console.log(err.response.data.errorMessage);
            setError(err.response.data.errorMessage)
        }



    }

    return (
        <div  className="loginbg" >


<NavBar />



            <Container style={{ height: "100vh",  }}>

   


                <Row style={{ justifyContent: "center", alignItems:"center",height:"100vh" }}  >
                    
                    <Col lg={6}  >
                 

                        <Card className="logCard"  style={{  padding: "50px", boxShadow: "0px 0px 8px #9E9E9E" ,opacity:"0.9"   }}>
                          
                            <Form  onSubmit={login} >   <h1  style={{ marginLeft:"0rem", }}  >Login</h1>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  
                                    <Form.Control required type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                   
                                        
                                        <p>We'll never share your email with anyone else.</p>
                          <p style={{color:"red"}} > {error} </p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                              
                                    <Form.Control required type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
</Button>
                            </Form>
                        </Card>


                    </Col>
                </Row>

            </Container>










        </div>
    )
}

export default Login

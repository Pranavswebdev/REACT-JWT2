import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import NavBar from '../layout/Navbar';
import { useNavigate } from 'react-router';
function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [blockStatus, setblockStatus] = useState("");
    const [passwordverify, setPasswordVerify] = useState("");
    const { getLoggedIn } = useContext(AuthContext)
    const [error, setError] = useState("");
    async function register(e) {

        e.preventDefault()
        try {

            const registerData = {
                name,
                email,
                password,
                passwordverify,
                blockStatus: "NotBlocked"


            }

            await axios.post('http://localhost:5000/auth/', registerData)
            await getLoggedIn()
            navigate('auth/home')
        } catch (err) {
            console.log(err);
            setError(err.response.data.errorMessage)
        }

    }

    return (
        <div className="registerbg" >

            <NavBar />

            <Container style={{ height: "100vh", }} >

                <Row style={{ justifyContent: "center", alignItems: "center", height: "100vh" }}  >

                    <Col lg={6}  >

                        <Card className="regCard" style={{ padding: "50px", boxShadow: "0px 0px 8px #9E9E9E" ,opacity:"0.9"  }}>
                            <h1 style={{ marginLeft: "7rem" }}  >Signup</h1>
                            <Form onSubmit={register} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    
                                    <Form.Control required type="text" placeholder="Enter Username" onChange={(e) => {setName(e.target.value) }} value={name    } />
                                    <Form.Label> </Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                                </Form.Group>
                            
                                   <p>We 'll never share your email with anyone else.</p> 
                                        <p style={{ color: "red" }} > {error} </p>
                               
                                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                          
                                    <Form.Control required type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                                
                                    <Form.Control required type="password" placeholder="Password" onChange={(e) => { setPasswordVerify(e.target.value) }} value={passwordverify} />

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

export default Register

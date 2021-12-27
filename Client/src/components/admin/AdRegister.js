import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col, Container, Card, CardGroup, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
function AdRegister() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordverify, setPasswordVerify] = useState("");
    const { getLoggedIn } = useContext(AuthContext)

    async function register(e) {

        e.preventDefault()
        try {

            const registerData = {

                email,
                password,
                passwordverify

            }

            await axios.post('http://localhost:5000/admin/adreg', registerData)
            getLoggedIn()
        } catch (err) {
            console.log(err);
        }



    }

    return (
        <div>

          


            <Container>

                <Row  style={{alignItems:"center" ,justifyContent:"center", marginLeft:"6rem", marginTop:"8rem"  }}  >
                    <Col   lg={6}  >


                        <Card style={{ width: '25rem',padding:"20px", boxShadow: "0px 0px 8px #9E9E9E"  }}>
                        <h1 style={{ marginLeft:"5rem" }}  >Admin Signup</h1>
                            <Form onSubmit={register} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value) }} value={email}  />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
</Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}  value={password} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                                    <Form.Label>Password Verify</Form.Label>
                                    <Form.Control required type="password" placeholder="Password"  onChange={(e)=>{setPasswordVerify(e.target.value) }}  value={passwordverify}  />
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

export default AdRegister

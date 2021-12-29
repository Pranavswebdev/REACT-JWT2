import React, { useEffect, useState } from "react";
import AdNavBar from "../layout/AdNavbar";
import axios from "axios";
import { Table, Container, Row, Col, Modal,Form,FormControl,Button } from "react-bootstrap";
import MButton from "@mui/material/Button/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import BlockIcon from "@material-ui/icons/Block";
import { render } from "@testing-library/react"





function AdHome() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState([]);
    const [placeHoldervalue, setPlaceHolder] = useState("");
    const [email, setEmail] = useState("");
    const [editeduser, setediteduser] = useState("");
    const [searchData,  setSearchData] = useState("");
   


    useEffect(() => {
        getuser();
    }, []);

    async function deleteUser(id) {
        const userId = {
            id,
        };
        try {
            const response = await axios.post(
                "http://localhost:5000/admin/deleteuser",
                userId
            );

            console.log(id);

            getuser();
        } catch (err) {
            console.log(err.response.data.errorMessage);
        }
    }

    async function blockUser(id) {
        const userId = {
            id,
        };
        try {
            await axios.post("http://localhost:5000/admin/blockuser", userId);

            console.log(id);

            getuser();
        } catch (err) {
            console.log(err.response.data.errorMessage);
        }
    }

    async function UnblockUser(id) {
        const userId = {
            id,
        };
        try {
            await axios.post("http://localhost:5000/admin/UnblockUser", userId);

            console.log(id);

            getuser();
        } catch (err) {
            console.log(err.response.data.errorMessage);
        }
    }

    async function getuser() {
        try {
            const response = await axios.get("http://localhost:5000/admin/getuser");

            console.log(response.data);

            setUsers(response.data);
        } catch (err) {
            console.log(err.response.data.errorMessage);
        }
    }



 


    async  function   search(e){

        e.preventDefault()
     
      console.log(" search data in client side",searchData);

      const SearchData = {

        searchData

      }

      const response= await axios.post("http://localhost:5000/admin/search",SearchData);

      setUsers(response.data);
   
   
       }




   async  function editUser(item){

     setPlaceHolder(item.email)
     setediteduser(item._id)     
     handleShow()


    }

    async  function changeEmail( ){

      

        try {
           
        console.log(email);

          await axios.post("http://localhost:5000/admin/changemail",{email,editeduser});



            getuser();
          
        } catch (err) {
            console.log(err)
        }


   
       }





    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                
                <fieldset>
                        
                    <legend  type="text"> Email</legend>
                   <input type="email"    onChange={(e) => { setEmail(e.target.value) }}  placeholder={placeHoldervalue}  />
                   

                </fieldset>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button  variant="primary" onClick={handleClose , changeEmail }>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>


            <AdNavBar />

            {
                <Container style={{}}>
                    <Row

                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                        }}
                    >   
                    

                        <Col lg={12}>
                            
                            <br />
                            <br />
                            <Col lg={4}>
                            <Form onSubmit={search} className="d-flex ">
        <FormControl
        onChange={(e) => { setSearchData(e.target.value) }} 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>

                            </Col>
              
                            <br />
                            <Table
                                borderless
                                responsive
                                striped
                                hover
                                variant="dark"
                                size="sm"
                            >
      
                                <thead>
                                    
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Block</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>@mdo</td>
                                                <th>{item.email}</th>
                                                <th>
                                                    <MButton
                                                        onClick={()=>{
                                                           editUser(item)

                                                              

                                                        }}
                                                        variant="outlined"
                                                        size="large"
                                                        color="info"
                                                        startIcon={<EditIcon fontSize="large" />}
                                                    ></MButton>{" "}
                                                </th>

                                                <th>
                                                    {" "}
                                                    {item.blockStatus === "Block" ? (
                                                        <MButton
                                                            onClick={() => UnblockUser(item._id)}
                                                            variant="outlined"
                                                            color="success"
                                                        >
                                                            {" "}
                              Unblock{" "}
                                                        </MButton>
                                                    ) : (
                                                        <MButton
                                                            onClick={() => blockUser(item._id)}
                                                            variant="outlined"
                                                            size="large "
                                                            color="secondary"
                                                            startIcon={<BlockIcon />}
                                                        ></MButton>
                                                    )}{" "}
                                                </th>

                                                <th>
                                                    {" "}
                                                    <MButton
                                                        onClick={() => deleteUser(item._id)}
                                                        variant="outlined"
                                                        size="large"
                                                        color="error"
                                                        startIcon={<DeleteIcon />}
                                                    ></MButton>{" "}
                                                </th>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );
}

export default AdHome;

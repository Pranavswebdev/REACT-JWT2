import React, { useEffect, useState } from "react";
import AdNavBar from "../layout/AdNavbar";
import axios from "axios";
import Swal from "sweetalert2"
import {
    Table,
    Container,
    Row,
    Col,
    Modal,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import MButton from "@mui/material/Button/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import BlockIcon from "@material-ui/icons/Block";
import { render } from "@testing-library/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdHome() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState([]);
    const [placeHoldervalue, setPlaceHolder] = useState("");
    const [nameplaceHoldervalue, setnamePlaceHolder] = useState("");
    const [editedname, setEditName] = useState("");
    const [editedemail, setEditEmail] = useState("");
    const [editeduser, setediteduser] = useState("");
    const [searchData, setSearchData] = useState("");


    const blocknotify = () => toast.success(" Blocked", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const editnotify = () => toast.success("Edit Successfull", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });



    useEffect(() => {
        getuser();
    }, []);

    async function deleteUser(id) {
        const userId = {
            id,
        };
        try {



            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then( async (result) => {
                if (result.isConfirmed) {


                    const response = await axios.post(
                        "http://localhost:5000/admin/deleteuser",
                        userId
                    );
                    getuser();

                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })





       

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

            blocknotify();
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

    async function search(e) {
        e.preventDefault();

        console.log(" search data in client side", searchData);

        const SearchData = {
            searchData,
        };

        const response = await axios.post(
            "http://localhost:5000/admin/search",
            SearchData
        );

        setUsers(response.data);
    }

    async function editUser(item) {

        setnamePlaceHolder(item.name);
        setPlaceHolder(item.email);
        setediteduser(item._id);
        handleShow();
    }

    async function changeEmail() {
        try {



            console.log(" editedemail, editedname,placeHoldervalue,nameplaceHoldervalue", editedemail, editedname,placeHoldervalue,nameplaceHoldervalue);

            if (editedemail==='') {

            console.log("email is empty",editedemail);

             setEditEmail(placeHoldervalue)
             console.log(editedemail);

            }else if(editedname === ''){

                console.log("name is empty", editedname);
                console.log(typeof nameplaceHoldervalue, "type")
                 setEditName(nameplaceHoldervalue)
                 console.log(editedname);

            }

            console.log('Current values of', editedemail,
            editedname);


            await axios.post("http://localhost:5000/admin/changemail", {
                editedemail,
                editedname,
                editeduser,
            });

            editnotify()
            getuser();
            setEditName('')
            setEditEmail('')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="adHome" >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {}
            <ToastContainer />

           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <fieldset>

                        <label style={{ padding: "2px" }} htmlFor="email">Email</label>
                        <input

                            style={{ border: "0px", borderRadius: "5px", boxShadow: "0px 0px 4px #9E9E9E" }}

                            type="email"
                            onChange={(e) => {
                                console.log(typeof e.target.value, "onchange")
                                setEditEmail(e.target.value);
                            }}
                            placeholder={placeHoldervalue}
                        />
                        <label style={{ padding: "5px" }} htmlFor="name">Name</label>
                        <input
                            style={{ border: "0px", borderRadius: "5px", boxShadow: "0px 0px 4px #9E9E9E" }}
                            required
                            type="name"
                            onChange={(e) => {
                                setEditName(e.target.value);
                            }}
                            placeholder={nameplaceHoldervalue}
                        />



                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={(handleClose, changeEmail)}>
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
                            <Col lg={4}>
                                <Form onSubmit={search} className="d-flex ">
                                    <FormControl
                                        onChange={(e) => {
                                            setSearchData(e.target.value);
                                        }}
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button type="submit" variant="outline-success">
                                        Search
                  </Button>
                                </Form>
                            </Col>

                            <br />
                            <Table
                                borderless
                                responsive
                              
                                hover
                                variant="none"
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
                                                <td>{item.name}</td>
                                                <th>{item.email}</th>
                                                <th>
                                                    <MButton
                                                        onClick={() => {
                                                            editUser(item);
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

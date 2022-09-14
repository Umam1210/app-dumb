import React from "react";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../image/logo.png";
import profil from "../image/profil.png";
import Dropdown from "react-bootstrap/Dropdown";
// import { FaBeer } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
import { BsFilm } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

function NavbarAdmin(

) {
    return (
        <div className="sticky-top">
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-danger"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link className="text-danger">Home</Nav.Link>
                            <Nav.Link className="text-danger">TV Show</Nav.Link>
                            <Nav.Link className="text-danger">Movie</Nav.Link>
                        </Nav>
                        <Nav.Link className="me-auto my-2 my-lg-0 text-danger" navbarScroll>
                            <img src={logo} alt="" />
                        </Nav.Link>
                        <Form className="d-flex" style={{ marginRight: "80px" }}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="dark"
                                    id="dropdown-menu-align-responsive-1"
                                >
                                    <img src={profil} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="me-4 bg-dark mt-2">
                                    <Dropdown.Item className="my-2 text-light" href="#/action-2">
                                        <BsFilm style={{ color: "red", marginRight:"10px" }} size={30} />
                                    Film
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="my-2 text-light" href="#/action-3">
                                        <RiLogoutCircleLine style={{ color: "red", marginRight:"10px" }} size={30} />
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarAdmin;


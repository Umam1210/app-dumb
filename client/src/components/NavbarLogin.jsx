import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../image/logo.png";
import profil from "../image/profil.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
// import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function NavbarLogin() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("login")) {
      JSON.parse(localStorage.getItem("login")) === true ? setIsLogin(true) : setIsLogin(false)
    }
  }, []);
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
              <Nav.Link className="text-danger">
                <Link to="/"> Home</Link>
              </Nav.Link>
              <Nav.Link className="text-danger">
                <Link to="/tvseries">TV Show</Link>
              </Nav.Link>
              <Nav.Link className="text-danger">
                <Link to="/movie">Movie</Link>
                </Nav.Link>
            </Nav>
            <Nav.Link className="me-auto my-2 my-lg-0 text-danger" navbarScroll>
              <img src={logo} alt="" />
            </Nav.Link>
            {isLogin ? (
              <Dropdown style={{marginRight:"80px"}}>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-menu-align-responsive-1"
                >
                  <img src={profil} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="me-4 bg-dark mt-2">
                  <Dropdown.Item className="my-2 text-light" >
                    <CgProfile
                      style={{ color: "red", marginRight: "10px" }}
                      size={30}
                    />
                    <Link to="/profil">Profil</Link>
                    
                  </Dropdown.Item>
                  <Dropdown.Item className="my-2 text-light" >
                    <MdPayment
                      style={{ color: "red", marginRight: "10px" }}
                      size={30}
                    />
                   <Link to="/pay">Pay</Link>
                    
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="my-2 text-light" onClick={()=>{
                    localStorage.removeItem("login")
                    setIsLogin(false)

                    navigate("/")
                  }}>
                    <RiLogoutCircleLine
                      style={{ color: "red", marginRight: "10px" }}
                      size={30}
                    />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Form className="d-flex">
                <Button
                  variant="light me-3"
                  onClick={() => {
                    setOpenModalRegister(true);
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="danger me-3"
                  onClick={() => {
                    setOpenModalLogin(true);
                  }}
                >
                  login
                </Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin
        setOpenModalLogin={setOpenModalLogin}
        showModal={openModalLogin}
        setIsLogin={setIsLogin}
      />
      <ModalRegister
        setOpenModalRegister={setOpenModalRegister}
        showModal={openModalRegister}
      />
    </div>
  );
}

export default NavbarLogin;

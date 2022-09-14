import React from 'react'
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import icon from '../icon/img3.png'
import icon2 from '../icon/img2.png'
import icon3 from '../icon/img5.png'
import icon4 from '../icon/img1.png'
import icon5 from '../icon/img6.png'
import icon6 from '../icon/img4.png'
import profil from '../icon/profil.png'
import NavbarLogin from './NavbarLogin';


function Detailprofil() {
    return (
        <>
        <NavbarLogin />
        <body style={{backgroundColor:"black"}}>
        <div className="flex py-5">
            <Container className="bg-dark text-light rounded" style={{width:"930px"}}>
                <Row className="">
                    <Col className="flex ms-4">
                        <h2>Personal info</h2>
                        <div className="my-4">
                            <h5> <img src={icon} alt="" className="me-3" />Radif Ganteng</h5>
                            <span className="ms-5 ">Full name</span>
                        </div>
                        <div className="mb-4">
                            <h5><img src={icon2} alt="" className="me-3" />radifgans@gmail.com</h5>
                            <span className="ms-5">Email</span>
                        </div>
                        <div className="mb-4">
                            <h5><img src={icon3} alt="" className="me-3" />Active</h5>
                            <span className="ms-5">Status</span>
                        </div>
                        <div className="mb-4">
                            <h5><img src={icon4} alt="" className="me-3" />Male</h5>
                            <span className="ms-5">Gender</span>
                        </div>
                        <div className="mb-4">
                            <h5><img src={icon5} alt="" className="me-3" />0812-8623-8911</h5>
                            <span className="ms-5">Mobile phone</span>
                        </div>
                        <div className="mb-4">
                            <h5><img src={icon6} alt="" className="me-3" />Perumahan Permata Bintaro Residence C-3</h5>
                            <span className="ms-5 mt-1">Address</span>
                        </div>
                    </Col>
                    <Col className="m-0 d-flex justify-content-end">
                        <Card
                            style={{
                                width: "18rem",
                                height:"20rem",
                                background: "#1F1F1F",
                                borderRadius: "5px",
                                border: "none",
                                marginTop: "80px",
                                marginRight:"30px"
                            }}
                        >
                            <Card.Img variant="top" src={profil} />
                            <Button
                                variant="danger"
                                style={{ marginTop: "20px", marginLeft: "0" }}
                            >
                                Change Photo Profile
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </body>
        </>
    )
}

export default Detailprofil
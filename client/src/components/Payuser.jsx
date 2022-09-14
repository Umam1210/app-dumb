import React from 'react'
import { Form, InputGroup, Button } from "react-bootstrap";
import icon from '../image/Vector.png'
import NavbarLogin from './NavbarLogin';

function Payuser() {
  return (
    <>
    <NavbarLogin />
      <body style={{backgroundColor:"black", paddingBottom:"200px"}}>
        
      
        <div className="flex " style={{paddingTop:"100px", paddingBottom:"100px"}} >
            <h2 className="text-light d-flex justify-content-center">Premium</h2>
            <p className="text-light d-flex justify-content-center">Bayar sekarang dan nikmati streaming film-film kekinian dari <b className="text-danger mx-2 fs-">Dumbflix</b></p>
            <p className="text-light d-flex justify-content-center"><b className="text-danger mx-2 fs-">Dumbflix</b>:888565225542</p>
            <div className="d-flex justify-content-center">
            <Form action="" className="d-grid gap-4 " style={{width:"400px"}}>
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="input your account number"
            />
          </Form.Group>
          <InputGroup className="mb-4 ">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="file"
            />
            <InputGroup.Text id="basic-addon1">
              <img src={icon} alt="" />
            </InputGroup.Text>
          </InputGroup>
          <Button variant="danger" size="lg" style={{ marginLeft: "0" }}>
            Kirim
          </Button>
        </Form>
        </div>


        </div>
        </body>
        </>
  )
}

export default Payuser
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

function ModalRegister(props) {
    function handleClose(){
        props.setOpenModalRegister(false)
    }
  return (
    <div>
        <Modal
        show={props.showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton 
        className="bg-dark" style={{border:"none"}}>
        <Modal.Title className="text-light"><h2>Register</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{border:"none"}}
        className="bg-dark">
          <Form 
        className="bg-dark">
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control 
                className="mt-3"
                type="password"
                placeholder="Password"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control 
                className="mt-3"
                type="text"
                placeholder="Full Name"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control 
                className="mt-3"
                type="text"
                placeholder="Gender"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control 
                className="mt-3"
                type="text"
                placeholder="Phone"
                autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control 
                className="mt-3"
                type="text"
                placeholder="Address"
                autoFocus />
            </Form.Group>
          </Form>
        <Button variant="danger text-light w-100 mt-3">Login</Button>
        </Modal.Body>
        <Modal.Footer style={{border:"none"}}
        className="bg-dark d-flex justify-content-center">
            <p className="text-light">Already have an account ? klik <a href="#">Here</a></p>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalRegister
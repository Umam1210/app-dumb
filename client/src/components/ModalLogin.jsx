import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalLogin(props) {
  function handleClose() {
    props.setOpenModalLogin(false);
  }
  return (
    <Modal
      show={props.showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="bg-dark" style={{ border: "none" }}>
        <Modal.Title className="text-light">
          <h2>Login</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ border: "none" }} className="bg-dark">
        <Form className="bg-dark">
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className="mt-3"
              type="password"
              placeholder="Email"
              autoFocus
            />
          </Form.Group>
        </Form>
        <Button
          variant="danger text-light w-100 mt-3"
          onClick={() => {
            props.setIsLogin(true);
            handleClose();
            localStorage.setItem("login", true);
          }}
        >
          Login
        </Button>
      </Modal.Body>
      <Modal.Footer
        style={{ border: "none" }}
        className="bg-dark d-flex justify-content-center"
      >
        <p className="text-light">
          Don't have an account ? klik <a href="#">Here</a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;

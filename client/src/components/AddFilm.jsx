import React from "react";
import { Form, InputGroup, Dropdown, ButtonGroup, DropdownButton,FloatingLabel, Button } from "react-bootstrap";
import icon from "../image/Vector.png";
import NavbarUser from "./NavbarUser";

function AddFilm() {
  return (
    <>
    <NavbarUser />
    <body style={{backgroundColor:"black", paddingBottom:"100px", paddingTop:"70px"}}>
        
    
    <div className="d-flex justify-content-center">
    <div  style={{width:"800px"}} className="bg-dark pb-5 rounded">
    <h2 className="text-light mx-5 py-3">Add Episode</h2>
      <Form className="mx-5">
        <div className="row">
          <div className="col">
            <Form.Group className="mb-0" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Title"
                style={{ width: "400px" }}
              />
            </Form.Group>
          </div>
          <div className="col">
            <InputGroup className="mb-4 col ">
              <Form.Control type="file" />
              <InputGroup.Text id="basic-addon1">
                <img src={icon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </Form>
      <div>
      <Form.Group
        controlId="formBasicEmail"
        className="d-flex justify-content-center mx-5"
      >
        <Form.Control
          type="text"
          placeholder="Year"
          style={{ width: "785px" }}
          className=""
        />
      </Form.Group>
        </div>
        <div>
        <DropdownButton
          as={ButtonGroup}
          align={{ lg: 'end' }}
          title="Categori"
          id="dropdown-menu-align-responsive-1"
          style={{width:"88%"}}
          variant="light"
          className="mx-5 my-3"
          
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
      <FloatingLabel className="mx-5" controlId="floatingTextarea2" label="Description" style={{width:"100"}}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          
        />
      </FloatingLabel>
      </div>
      <Form className="mx-5 mt-3">
        <div className="row">
          <div className="col">
            <Form.Group className="mb-0" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Title Episode"
                style={{ width: "400px" }}
              />
            </Form.Group>
          </div>
          <div className="col">
            <InputGroup className="mb-4 col ">
              <Form.Control type="file" />
              <InputGroup.Text id="basic-addon1">
                <img src={icon} alt="" style={{ height: "20px" }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </Form>
      <div>
      <Form.Group
        controlId="formBasicEmail"
        className="d-flex justify-content-center mx-5"
      >
        <Form.Control
          type="text"
          placeholder="Link Film"
          style={{ width: "785px" }}
          className=""
        />
      </Form.Group>
        </div>
        <div className="d-flex justify-content-end">
              <Button variant="danger" className="px-5 py-1 mt-3 mx-5 ">
                Add film
              </Button>
            </div>
      
    </div>
    </div>
    </body>
    </>
  );
}

export default AddFilm;

import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data/data.json";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
// import image from '../image/card.png'

function ListFilmAdmin() {
  return (
    <div className="bg-dark pt-5">
      <div className="flex">
        <div className="d-flex flex-row mb-3">
          <h1 className="text-light mx-5 p-0" style={{width:"240px"}}>List Film</h1>
          <div className="mx-2">
            <Dropdown className="mt-1">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark" variant="dark">
                <Dropdown.Item className="text-light" href="#/action-1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#/action-2">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#/action-2">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#/action-2">
                  Romance
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#/action-3">
                  Fight
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="w-100 d-flex justify-content-end mx-5 mt-1">
            <div>
              <Button variant="danger" className="px-5 py-1 mt-1">
                Add film
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-light ms-3 pt-3">TV Series</h4>
      <Row xs={1} md={6} className="mx-2 bg-dark">
        {data.map((item, id) => {
          return (
            <Col className="my-3">
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>This is</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ListFilmAdmin;

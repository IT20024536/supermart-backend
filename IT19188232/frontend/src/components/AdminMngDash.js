import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Col, Row, Table } from "react-bootstrap";
import empIcon from "../images/emp1.jpeg";
import salaryIcon from "../images/salary1.jpg";
import depIcon from "../images/depicon.png";
import "./AdminMngDash.css"

import { Link } from "react-router-dom";

const AdminMngDash = () => {
  return (
  
      <div>
        <div className="Container" id="container5" >
        <div className="row">
              <div className="col-md-8 mx-auto">

                  <div className="card">
                      <div className="card-body">
                          <div className="row">
                              <div className="col" id="header1">
                                  <center>
                                      <h3 > ADMIN HOME</h3>
                                  </center>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col">
                                  <hr />
                              </div>
                          </div>


          <Row md={1} className="g-4">
          <form className="row g-1" id="full-window4">
            <Col>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <Card
                bg="success"
                text="light"
                style={{ width: "15rem", height: "20rem" }}
              >
                <Card.Img variant="top" src={empIcon} />
                <Card.Body>
                  <Card.Title>Profile Management</Card.Title>
                </Card.Body>
              </Card>
              </a>
              </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a className="nav-link" href="/alls">

              <Card
                bg="success"
                text="light"
                style={{ width: "15rem", height: "20rem" }}
              >
                <Card.Img variant="top" src={salaryIcon} />
                <Card.Body>
                  <Card.Title>Salary Management</Card.Title>
                </Card.Body>
              </Card>
              </a>
              </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a className="nav-link" href="/alld">
            
              <Card
                bg="success"
                text="light"
                style={{ width: "15rem", height: "20rem" }}
              >
                <Card.Img variant="top" src={depIcon} />
                <Card.Body>
                  <Card.Title>Department Management</Card.Title>
                </Card.Body>
              </Card>
              </a>
              </li>
            </Col>
           </form> 
          </Row>
         
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default AdminMngDash;
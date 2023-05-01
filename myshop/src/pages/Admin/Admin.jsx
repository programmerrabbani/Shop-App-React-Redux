import React from "react";
import "./Admin.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="admin_page">
        <Container className="my-5">
          <Row>
            <Col md={2}>
              <div className="admin_menu">
                <ul>
                  <li>
                    <Link to="">Dashbord</Link>
                  </li>
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  <li>
                    <Link to="categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="brands">Brands</Link>
                  </li>
                  <li>
                    <Link to="tags">Tags</Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col md={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Admin;

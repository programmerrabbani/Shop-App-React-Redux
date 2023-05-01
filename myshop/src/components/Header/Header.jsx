import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col md={3}>
              <div className="logo">
                <Link href="">
                  <img
                    className="brand_logo"
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </Col>
            <Col md={9}></Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;

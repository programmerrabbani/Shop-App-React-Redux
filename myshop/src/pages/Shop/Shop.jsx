import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.scss";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Shop = () => {
  return (
    <>
      <section className="shop_page my-5">
        <Container>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <div className="shop_items_wraper">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;

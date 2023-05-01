import React from "react";
import "./SingleProduct.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";

const SingleProduct = () => {
  return (
    <>
      <div className="single_product">
        <Container>
          <Row>
            <Col md={6}>
              <div className="product_single_photo">
                <img
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fapple-iphone-14-pro-max-price-increase-100-usd-rumors-000.jpg?w=960&cbr=1&q=90&fit=max"
                  alt=""
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="product_info">
                <h1>Apple iPhone 14 Pro Max</h1>
                <div className="price">
                  <span className="regular">$1200</span>
                  <span className="sale">$900</span>
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti laboriosam sint officiis est animi vel.
                  </p>
                </div>
                <span className="stock">20 In Stock</span>
                <div className="cart_btn">
                  <input type="number" />
                  <Button className="add_cart">Add To Cart</Button>
                  <Button className="wish_btn">
                    <AiOutlineHeart />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12}>
              <h3>Related Product</h3>
            </Col>
            <Col md={12}>
              <div className="related_products">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleProduct;

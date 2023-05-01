import React, { useState } from "react";
import "./ProductItem.scss";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductViewModal from "../ProductViewModal/ProductViewModal.jsx";

const ProductItem = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="product_item">
        <ProductViewModal show={show} onHide={() => setShow(false)} />
        <Card>
          <Link to="/sdsdfsdfsdf">
            <Card.Img src="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596667-Product-0-I-637982213840849162.jpg?v=1662700221"></Card.Img>
          </Link>
          <Card.Body>
            <Card.Title>Apple 14 Pro</Card.Title>
            <div className="pricing">
              <span className="reguler">$1200</span>
              &nbsp;
              <span className="sale">$900</span>
            </div>
            <div className="product_button">
              <Button className="cart_btn">Add To Cart</Button> &nbsp;
              <Button className="view_btn" onClick={() => setShow(true)}>
                View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProductItem;

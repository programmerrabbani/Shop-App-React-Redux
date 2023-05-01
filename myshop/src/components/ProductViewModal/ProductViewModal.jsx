import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ProductViewModal.scss";

const ProductViewModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>
          <h1>Apple 14 Pro</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="product_quick_view">
            <div className="product_photo">
              <img
                src="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596667-Product-0-I-637982213840849162.jpg?v=1662700221"
                alt=""
              />
            </div>
            <div className="product_details">
              <div className="view_pricing">
                <span className="regular">$1200</span>
                <span className="sale">$900</span>
              </div>
              <hr />
              <div className="product_details">
                <h3>Product Deiscription</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  eum dicta corrupti, exercitationem animi voluptatem minus! Ut
                  qui, commodi ratione repellat nisi enim quas, repudiandae
                  libero ex voluptates excepturi corporis eligendi autem
                  voluptas est, consequatur suscipit? Facere distinctio tempore,
                  laudantium a nulla perspiciatis laborum? Ea quaerat nam itaque
                  consectetur similique!
                </p>
              </div>
              <div className="add_to_cart_btn">
                <Button>Add To Cart</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductViewModal;

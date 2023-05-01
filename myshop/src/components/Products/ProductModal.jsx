import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./Products.scss";
import { useSelector } from "react-redux";

const ProductModal = ({ show, onHide }) => {
  const { categories, tags, brands } = useSelector((state) => state.shop);
  const [input, setInput] = useState({
    name: "",
    regular_price: "",
    sale_price: "",
    stock: "",
    short_desc: "",
    long_desc: "",
  });
  const [photo, setPhoto] = useState(null);
  const [gallery, setGallery] = useState(null);

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleGalleryUpload = (e) => {
    const gallery_files = Array.from(e.target.files);

    setGallery([...gallery_files]);
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>Add New Product</Modal.Header>
        <Modal.Body>
          <Form onSubmit="" className="product_form">
            <div className="form_left">
              <Form.Group className="my-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  // value={input}
                  // onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Regular Price </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label> Stock </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label> Short Description </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label> Long Description </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Sale Price </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Product Photo</Form.Label>
                <Form.Control type="file" onChange={handlePhotoUpload} />
                <br />
                <img style={{ maxWidth: "100%" }} src="" alt="" />
                {/* {logo && (
                <img
                  style={{ maxWidth: "100%" }}
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              )} */}
              </Form.Group>

              <Button variant="primary" type="submit">
                Add New Product
              </Button>
            </div>
            <div className="form_right">
              <Form.Group className="my-3">
                <Form.Label>Product Category</Form.Label>
                {categories?.map(({ name, _id }, index) => {
                  return (
                    <label key={index} className="d-block">
                      <input type="checkbox" value={_id} /> &nbsp;
                      {name}
                    </label>
                  );
                })}
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Product Tag</Form.Label>
                {tags?.map(({ name, _id }, index) => {
                  return (
                    <label key={index} className="d-block">
                      <input type="checkbox" value={_id} /> &nbsp;
                      {name}
                    </label>
                  );
                })}
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Product Brand</Form.Label>
                <select name="" id="" className="form-control">
                  <option value="">-- Select --</option>
                  {brands?.map(({ name, _id }, index) => {
                    return <option value="_id">{name}</option>;
                  })}
                </select>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Product Gallery Photo</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  onchange={handleGalleryUpload}
                />
                <br />
                <img style={{ maxWidth: "100%" }} src="" alt="" />
                {/* {logo && (
                <img
                  style={{ maxWidth: "100%" }}
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              )} */}
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductModal;

import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, updateCategory } from "../../redux/shop/Actions.js";

const CategoriesAddModal = ({ show, onHide, setModal, type, dataId }) => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({
    name: "",
    photo: "",
  });
  const [logo, setLogo] = useState(null);
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.shop);

  // Logo Upload

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  // category create

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("name", input);
    form_data.append("category-photo", logo);

    dispatch(createCategory({ data: form_data, setModal, setInput, setLogo }));

    e.target.reset();
  };

  // Category update

  const handleUpdateCategory = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", edit?.name);
    form_data.append("photo", edit?.photo);
    form_data.append("category-photo", logo);

    dispatch(updateCategory({ data: form_data, id: dataId, setModal }));
  };

  // get edit data

  useEffect(() => {
    const edit_data = categories.find((data) => data._id === dataId);
    setEdit(edit_data);
  }, [dataId, categories]);

  // onhide

  const handleOnHide = () => {
    onHide();
    setLogo(null);
  };

  if (type === "create") {
    return (
      <>
        <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton>Add New Category</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCreateCategory}>
              <Form.Group className="my-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Category Photo</Form.Label>
                <Form.Control onChange={handleLogoUpload} type="file" />
                <br />
                {logo && (
                  <img
                    style={{ maxWidth: "100%" }}
                    src={URL.createObjectURL(logo)}
                    alt=""
                  />
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (type === "edit") {
    return (
      <>
        <Modal show={show} onHide={handleOnHide} centered>
          <Modal.Header closeButton>Update Category</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdateCategory}>
              <Form.Group className="my-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  value={edit?.name}
                  onChange={(e) =>
                    setEdit((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Category Photo</Form.Label>
                <Form.Control onChange={handleLogoUpload} type="file" />
                <br />
                {logo ? (
                  <img
                    style={{ maxWidth: "100%" }}
                    src={URL.createObjectURL(logo)}
                    alt=""
                  />
                ) : (
                  <img
                    style={{ maxWidth: "100%" }}
                    src={`http://localhost:5050/categories/${edit?.photo}`}
                    alt=""
                  />
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
};

export default CategoriesAddModal;

import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createTag, updateTag } from "../../redux/shop/Actions.js";
import { useDispatch, useSelector } from "react-redux";

const TagsModal = ({ show, onHide, setModal, type, dataId }) => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({
    name: "",
  });
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.shop);

  // Tag create

  const handleCreateTags = async (e) => {
    e.preventDefault();
    dispatch(createTag(input, setModal, setInput));
    e.target.reset();
  };

  // tag update
  const handleUpdateTag = (e) => {
    e.preventDefault();

    dispatch(
      updateTag({
        id: dataId,
        name: edit?.name,
        setModal,
      })
    );
  };
  // get edit data
  useEffect(() => {
    const edit_data = tags.find((data) => data._id === dataId);
    setEdit(edit_data);
  }, [dataId, tags]);

  if (type === "create") {
    return (
      <>
        <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton>Add New Tag</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCreateTags}>
              <Form.Group className="my-3">
                <Form.Label>Tag Name</Form.Label>
                <Form.Control
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
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
        <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton>Update Tag</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdateTag}>
              <Form.Group className="my-3">
                <Form.Label>Tag Name</Form.Label>
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

export default TagsModal;

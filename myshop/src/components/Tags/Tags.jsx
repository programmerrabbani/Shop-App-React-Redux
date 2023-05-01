import React, { useState } from "react";
import "./Tags.scss";
import { Button, Form, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import TagsModal from "./TagsModal.jsx";
import { deleteTag, updateTagStatus } from "../../redux/shop/Actions.js";

const Tags = () => {
  const [modal, setModal] = useState({
    show: false,
    type: "create",
    dataId: null,
  });

  const { tags } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  // delete brands

  const handleBrandDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTag(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // status update

  const handleStatusUpdate = (id, status) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Status Update Successful",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(updateTagStatus({ id, status: !status }));
  };

  // edit

  const handleTagEdit = (id) => {
    setModal({ type: "edit", show: true, dataId: id });
  };

  return (
    <>
      <div className="table_content">
        <div className="table_content_header">
          <h2>Tags</h2>
          <button
            onClick={() =>
              setModal((prevState) => ({
                ...prevState,
                show: true,
                type: "create",
              }))
            }
          >
            <AiOutlinePlus /> Create New Tag
          </button>
        </div>
        <div className="table_content_list my-3">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tags.map(({ name, slug, _id, status }, index) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <Form.Check
                        onChange={() => handleStatusUpdate(_id, status)}
                        type="switch"
                        id="custom-switch"
                        label=""
                        checked={status}
                      />
                    </td>
                    <td>
                      <Button className="btn-sm" variant="info">
                        <FaEye />
                      </Button>
                      &nbsp;
                      <Button
                        className="btn-sm"
                        variant="warning"
                        onClick={() => handleTagEdit(_id)}
                      >
                        <FiEdit />
                      </Button>
                      &nbsp;
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={() => handleBrandDelete(_id)}
                      >
                        <FiTrash2 />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <TagsModal
          setModal={setModal}
          show={modal.show}
          onHide={() =>
            setModal((prevState) => ({ ...prevState, show: false }))
          }
          type={modal.type}
          dataId={modal.dataId}
        />
      </div>
    </>
  );
};

export default Tags;

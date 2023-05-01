import React, { useState } from "react";
import "./Categories.scss";
import { FaEye } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Button, Form, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import CategoriesAddModal from "./CategoriesAddModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  updateCategoryStatus,
} from "../../redux/shop/Actions.js";
import Swal from "sweetalert2";

const Categories = () => {
  const [modal, setModal] = useState({
    show: false,
    type: "create",
    dataId: null,
  });

  const { categories } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  // status update

  const handleStatusUpdate = (id, status) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Status Update Successful",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(updateCategoryStatus({ id, status: !status }));
  };

  // delete category
  const handleCategoryDelete = (id) => {
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
        dispatch(deleteCategory(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // edit

  const handleCategoryEdit = (id) => {
    setModal({ type: "edit", show: true, dataId: id });
  };

  return (
    <>
      <div className="table_content">
        <div className="table_content_header">
          <h2>Categories</h2>
          <button
            onClick={() =>
              setModal((prevState) => ({
                ...prevState,
                show: true,
                type: "create",
              }))
            }
          >
            <AiOutlinePlus /> Create New Category
          </button>
        </div>
        <div className="table_content_list my-3">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Logo</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(({ name, slug, photo, _id, status }, index) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                        src={`http://localhost:5050/categories/${photo}`}
                        alt=""
                      />
                    </td>
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
                        onClick={() => handleCategoryEdit(_id)}
                      >
                        <FiEdit />
                      </Button>
                      &nbsp;
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={() => handleCategoryDelete(_id)}
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
        <CategoriesAddModal
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

export default Categories;

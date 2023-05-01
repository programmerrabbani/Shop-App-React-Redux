import React, { useState } from "react";
import "./Brands.scss";
import { AiOutlinePlus } from "react-icons/ai";
import BrandsModal from "./BrandsModal.jsx";
import { Button, Form, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, updateBrandStatus } from "../../redux/shop/Actions.js";
import Swal from "sweetalert2";

const Brands = () => {
  const [modal, setModal] = useState({
    show: false,
    type: "create",
    dataId: null,
  });

  const { brands } = useSelector((state) => state.shop);

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
        dispatch(deleteBrand(id));
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
    dispatch(updateBrandStatus({ id, status: !status }));
  };

  // edit

  const handleBrandEdit = (id) => {
    setModal({ type: "edit", show: true, dataId: id });
  };

  return (
    <>
      <div className="table_content">
        <div className="table_content_header">
          <h2>Brands</h2>
          <button
            onClick={() =>
              setModal((prevState) => ({
                ...prevState,
                show: true,
                type: "create",
              }))
            }
          >
            <AiOutlinePlus /> Create New Brand
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
              {brands.map(({ name, slug, photo, _id, status }, index) => {
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
                        src={`http://localhost:5050/brands/${photo}`}
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
                        onClick={() => handleBrandEdit(_id)}
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
        <BrandsModal
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

export default Brands;

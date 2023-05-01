import React, { useState } from "react";
import "./Products.scss";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Button, Form, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import ProductModal from "./ProductModal.jsx";
import { useSelector } from "react-redux";

const Products = () => {
  const [modal, setModal] = useState(false);
  const { loading, products } = useSelector((state) => state.shop);
  return (
    <>
      <div className="table_content">
        <div className="table_content_header">
          <h2>Products</h2>
          <button onClick={() => setModal(true)}>
            <AiOutlinePlus /> Create New Product
          </button>
        </div>
        <div className="table_content_list my-3">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Photo</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Tag</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading && <h1>Loading ****</h1>}
              {products?.map(
                (
                  { name, photo, _id, status, regular_price, sale_price },
                  index
                ) => {
                  return (
                    <tr className="align-middle" key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>
                        {sale_price ? (
                          <>
                            <del>{regular_price}</del> &nbsp;
                            <span>{sale_price}</span>
                          </>
                        ) : (
                          <span>${regular_price}</span>
                        )}
                      </td>
                      <td>
                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                          // src={`http://localhost:5050/brands/${photo}`}
                          src=""
                          alt=""
                        />
                      </td>
                      <td>{name}</td>
                      <td>{name}</td>
                      <td>{name}</td>
                      <td>
                        <Form.Check
                          // onChange={() => handleStatusUpdate(_id, status)}
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
                          // onClick={() => handleBrandEdit(_id)}
                        >
                          <FiEdit />
                        </Button>
                        &nbsp;
                        <Button
                          className="btn-sm"
                          variant="danger"
                          // onClick={() => handleBrandDelete(_id)}
                        >
                          <FiTrash2 />
                        </Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
        <ProductModal
          setModal={setModal}
          show={modal}
          onHide={() => setModal(false)}
        />
      </div>
    </>
  );
};

export default Products;

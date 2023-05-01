import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_area">
        <div className="sidebar_widget">
          <h3 className="widget_title">Search Product</h3>
          <hr />
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
        </div>

        <div className="sidebar_widget">
          <h3 className="widget_title">Categories</h3>
          <hr />
          <ul className="list">
            <li>
              <label>
                <input type="checkbox" /> Men
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Women
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </li>
          </ul>
        </div>

        <div className="sidebar_widget">
          <h3 className="widget_title">Brands</h3>
          <hr />
          <ul className="list">
            <li>
              <label>
                <input type="checkbox" /> Men
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Women
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </li>
          </ul>
        </div>

        <div className="sidebar_widget">
          <h3 className="widget_title">Tags</h3>
          <hr />
          <div className="tags_items">
            <a href="">Eid</a>
            <a href="">Korbani</a>
            <a href="">Puja</a>
          </div>
        </div>

        <div className="sidebar_widget">
          <h3 className="widget_title">Search Product</h3>
          <hr />
          <div className="price_search">
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

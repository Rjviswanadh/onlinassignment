import React from "react";
import "./index.css";

const Productsells = () => {
  return (
    <div className="bg-color">
      <div className="sells">
        <div className="products-responsive">
          <h1>Product Sell</h1>
          <div>
            <input type="text" placeholder="Search" />
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="text-secondary">Product Name</p>
          <div className="d-flex justify-content-between w-40">
            <p className="text-secondary">Stock</p>
            <p className="price text-secondary">Price</p>
            <p className="text-secondary">Total Sales</p>
          </div>
        </div>
        <div className="p-0">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img />
              <div>
                <h1>Abstract 3D</h1>
                <p>Lorem ipsum sit amet,conseluar</p>
              </div>
            </div>
            <div className="d-flex stocks">
              <p>32 in stock</p>
              <p className="price">45$</p>
              <p>20</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img />
              <div>
                <h1>Abstract 3D</h1>
                <p>Lorem ipsum sit amet,conseluar</p>
              </div>
            </div>
            <div className="d-flex stocks">
              <p>32 in stock</p>
              <p className="price">45$</p>
              <p>20</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img />
              <div>
                <h1>Abstract 3D</h1>
                <p>Lorem ipsum sit amet,conseluar</p>
              </div>
            </div>
            <div className="d-flex stocks">
              <p>32 in stock</p>
              <p className="price">45$</p>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsells;

import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="bg-primary">
      <li to="/">
        <h1 className="dash">Dashboard</h1>
      </li>
      <Link to="/">
        <li>Dashboard</li>
      </Link>
      <Link to="/products">
        <li>Product</li>
      </Link>
      <Link to="/customers">
        <li>Customers</li>
      </Link>
      <Link to="/income">
        <li>Income</li>
      </Link>
      <Link to="/promote">
        <li>Promote</li>
      </Link>
      <Link to="/help">
        <li>Help</li>
      </Link>
    </ul>
  );
};

export default Header;

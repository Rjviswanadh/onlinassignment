import React from "react";
import Header from "../Header";
import "./index.css";
import Productsells from "../Productsells";
import { Barcharts, PieChart } from "../Charts";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Home = () => {
  const [menu, setmenu] = React.useState(true);
  const clicktoshow = () => {
    setmenu(false);
  };
  return (
    <>
      <div className="d-flex header-component">
        <Header className="home-header" />
        <div className="home-page">
          <div className="d-flex justify-content-between w-75 mt-3 p-3">
            <h1>HI! viswa</h1>
            <input type="text" placeholder="search" className="p-1 h-100" />
          </div>
          <div className="d-flex justify-content-center mobile">
            <div className="bg-white d-flex">
              <AiOutlineDollarCircle className="md" />
              <div>
                <p>Earning</p>
                <p>$198k</p>
                <p>$198k</p>
              </div>
            </div>
            <div className="bg-white d-flex">
              <VscBook className="md" />
              <div>
                <p>Orders</p>
                <p>$198k</p>
                <p>$198k</p>
              </div>
            </div>
            <div className="bg-white d-flex">
              <MdAccountBalanceWallet className="md" />
              <div>
                <p>Balance</p>
                <p>$198k</p>
                <p>$198k</p>
              </div>
            </div>
            <div className="bg-white d-flex">
              <PiHandbagSimpleFill className="md" />
              <div>
                <p>Total Sales</p>
                <p>$198k</p>
                <p>$198k</p>
              </div>
            </div>
          </div>
          <div className="mb-5 mt-5 d-flex justify-content-center">
            <div className="bar-chart-item">
              <div className="d-flex height justify-content-between">
                <div className="mt-4">
                  <h1>Overview</h1>
                  <p className="text-secondary">Monthly Earning</p>
                </div>
                <select className="select">
                  <option className="text-secondary">montly</option>
                  <option className="text-secondary">Quarterly</option>
                  <option className="text-secondary">Yearly</option>
                </select>
              </div>
              <Barcharts />
            </div>
            <div className="p-5 ch">
              <div className="border-rad">
                <div className="customers-buys mb-0">
                  <p1>Customers</p1>
                  <p className="mb-0">Customers that buy products</p>
                </div>
                <PieChart />
              </div>
            </div>
          </div>
          <Productsells />
        </div>
      </div>
    </>
  );
};

export default Home;

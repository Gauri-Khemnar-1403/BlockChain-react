import React, { useState, useEffect } from "react";
import "./App.css";
import abi from "./contractJson/Product.json";
import Product from "./component/pages/Product";
import Buy from "./component/pages/Buy";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const { ethers } = require("ethers");

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("account not connected");

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x38164592Af14946B04510582dD84F1670a2B7e70";
      const contractABI = abi.abi; // Add your contract ABI here

      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          setAccount(accounts[0]);

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
        }
      } catch (error) {
        console.error(error);
      }
    };

    template();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <strong>Connected Account - {account}</strong>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Buy state={state} />} />
          <Route path="/Products" element={<Product state={state} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

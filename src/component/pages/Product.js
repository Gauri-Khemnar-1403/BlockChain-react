import React, { useState, useEffect } from "react";

export default function Product({ state }) {

  const [products, setProducts] = useState([]);
  const { contract } = state;
  
  useEffect(() => {
    const productMessage = async () => {
      try {
        const products = await contract.getProduct();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    contract && productMessage();
  }, [contract]);

  return (
    <div className="container">
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>All Products</h3>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card bg-light" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", padding: "20px" }}>
              <h5 className="card-title">{product.name}</h5>
              {/* <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} width="100%" height="200px" /> */}
              <p className="card-text">Timestamp: {new Date(product.timestamp * 1000).toLocaleString()}</p>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Prize: {product.prize.toString()}</p>
              <p className="card-text">From: {product.from}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

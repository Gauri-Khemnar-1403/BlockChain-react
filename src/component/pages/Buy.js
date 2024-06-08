import React from "react";
import "./Buy.css";
const { ethers } = require("ethers");

export default function Buy({ state }) {
  // function adjustInputSize() {
  //   // Your implementation here
  // }
  const buyProduct = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const prize = document.querySelector("#prize").value;
    // const imageFile = document.querySelector("#imageHash").files[0];
    //const amount = document.querySelector("#amount").value;

    // Convert the image file to base64 string
    // const reader = new FileReader();
    // reader.readAsDataURL(imageFile);
    // reader.onloadend = async () => {
    //   const imageBase64 = reader.result;

    //   // Encode the image base64 string to bytes
    //   const imageBytes = ethers.utils.toUtf8Bytes(imageBase64);

      const amount = { value: ethers.utils.parseEther("0.001") };
      const transaction = await contract.buyProduct(
        name,
        description,
        prize,
        // imageBytes,
        amount
      );
      await transaction.wait();
      alert("Transaction is successul");
      window.location.reload();
    };
  // };

  return (
    <>
      <div className="container App">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/24/65/59/1000_F_124655917_Vjc5JErdTetkRwnUWbIF9RJbY6g5BM6X.jpg"
              className="img-fluid"
              alt=".."
              width="100%"
            />
          </div>
          <div className="col-lg-6 mt-5">
            <form onSubmit={buyProduct}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control py-4"
                  id="name"
                  placeholder="Set product name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Product description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="Set a product Info "
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Product Prize
                </label>
                <input
                  type="number"
                  className="form-control py-4"
                  id="prize"
                  placeholder="Set product prize"
                />
              </div>
              {/* <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="imageHash"
                />
              </div> */}
              <button
                className="btn btn-primary px-5 py-2"
                value="Pay"
                // disabled={!state.contract}
              >
                Registar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

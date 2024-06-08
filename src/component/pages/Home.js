import React from "react";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-touch="false"
        data-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/474x/5e/6e/99/5e6e99a4b60329ed067fc68c0227ac75.jpg"
              className="d-block "
              alt="..."
              style={{ height: "400px", width: "100%"}}
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/08840617962331.5634d25822143.jpg"
              className="d-block "
              alt="..."
              style={{ height: "400px", width: "100%",}}
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-online-shop-logo-design-icon-png-image_4825247.jpg"
              className="d-block"
              alt="..."
              style={{ height: "400px", width: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControlsNoTouching"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControlsNoTouching"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleControlsNoTouching"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-target="#carouselExampleControlsNoTouching"
            data-slide-to="1"
          ></li>
          <li
            data-target="#carouselExampleControlsNoTouching"
            data-slide-to="2"
          ></li>
        </ol>
      </div>
    </div>
  );
}

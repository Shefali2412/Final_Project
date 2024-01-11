import React from "react";

export const CarouselComponent = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src={process.env.PUBLIC_URL + "./img/1.jpg"}
            alt="slide1"
            className="d-block w-100 carousel-image"
          />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img
            src={process.env.PUBLIC_URL + "./img/5.png"}
            alt="slide1"
            className="d-block w-100 carousel-image"
          />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img
            src={process.env.PUBLIC_URL + "./img/4.png"}
            alt="slide1"
            className="d-block w-100 carousel-image"
          />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img
            src={process.env.PUBLIC_URL + "./img/6.png"}
            alt="slide1"
            className="d-block w-100 carousel-image"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

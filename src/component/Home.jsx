import React from 'react';
import bg from '../assets/bg.jpg';
import Products from './Products';

export default function Home() {
  return (
    <div className="hero ">
      <div
        className="card text-bg-dark border-0 "
        height="550px"
      >
        <img
          src={bg}
          className="card-img rounded-0"
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON APPARELS
            </h5>
            <p className="card-text lead fs-2">
              CHECK OUT HOT ITEMS NOW!
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

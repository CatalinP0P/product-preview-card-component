import React from "react";
import "./App.Module.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__image" />
        <div className="card__body">
          <label className="card__body__subtitle">PERFUME</label>
          <label className="card__body__title">
            Gabrielle Essence Eau De Parfum
          </label>
          <p className="card__body__text">
            A floral, solar and and voluptuous interpretation composed by
            Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="card__price__container">
            <label className="card__price__container__price">$149.99</label>
            <label className="card__price__container__oldprice">
              <s>$169.99</s>
            </label>
          </div>

          <button className="card__button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

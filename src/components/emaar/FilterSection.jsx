// src/components/emaar/FilterSection.jsx
import React from "react";

export function FilterSection() {
  return (
    <section className="p-4 bg-white shadow-lg rounded d-none d-md-block">
      <form className="row g-3 align-items-end">
        <div className="col-md-3 col-6">
          <label className="form-label small text-secondary">Property Type</label>
          <select className="form-select">
            <option>Any</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Townhouse</option>
          </select>
        </div>

        <div className="col-md-3 col-6">
          <label className="form-label small text-secondary">Bedrooms</label>
          <select className="form-select">
            <option>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>

        <div className="col-md-3 col-6">
          <label className="form-label small text-secondary">Price Range</label>
          <select className="form-select">
            <option>Any</option>
            <option>Up to 1,000,000</option>
          </select>
        </div>

        <div className="col-md-3 col-6 d-grid">
          <button className="btn btn-secondary btn-lg">SEARCH PROPERTIES</button>
        </div>
      </form>
    </section>
  );
}

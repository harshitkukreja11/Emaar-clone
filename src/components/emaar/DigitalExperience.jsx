import React from "react";
import "./DigitalExperience.css";

export function DigitalExperience() {
  return (
    <section className="digital-experience container my-5 py-5">
      <div className="row align-items-center g-5">
        {/* LEFT TEXT SECTION */}
        <div className="col-lg-6">
          <h6 className="text-secondary fw-semibold mb-2">A DIGITAL EXPERIENCE</h6>
          <h2 className="fw-bold mb-3">
            THE ONE APP YOU NEED FOR ALL YOUR PROPERTY NEEDS
          </h2>
          <p className="text-muted mb-4">
            Emaar One allows homeowners and tenants to fully manage their property
            from their phone anytime, anywhere.
          </p>

          {/* FEATURES LIST IN TWO COLUMNS */}
          <div className="row">
            <div className="col-md-6">
              <ul className="feature-list">
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Construction updates
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Property-related transfers
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Ownership updates
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Move In/Out requests
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="feature-list">
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Access card requests
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Online payments
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  Amenities booking
                </li>
                <li>
                  <span className="circle-icon">
                    <i className="fa-regular fa-shovel"></i>
                  </span>
                  ECM & Home services
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>

          {/* APP DOWNLOAD SECTION */}
<div className="app-download d-flex align-items-center justify-content-start gap-4 mt-5 flex-wrap">
  {/* LEFT IMAGE */}
  <div className="app-image">
    <img
      src="https://www.emaar.com/wp-content/uploads/2023/10/emaar-one.png"
      alt="Emaar One"
      className="img-fluid emaar-one-logo"
    />
  </div>
            <h5 className="fw-semibold mb-3">DOWNLAOD <br></br> EMAAR ONE APP</h5>
            <div className="app-buttons d-flex align-items-center gap-3 mt-3 flex-wrap">
  <img
    src="https://www.emaar.com/wp-content/uploads/2023/07/apple.png"
    alt="App Store"
    className="store-btn"
  />
  <img
    src="https://www.emaar.com/wp-content/uploads/2023/07/google-play.png"
    alt="Google Play"
    className="store-btn"
  />
  <img
    src="https://www.emaar.com/wp-content/uploads/2023/07/Huawei-app-logo.png"
    alt="App Gallery"
    className="store-btn"
  />
</div>


          
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-lg-6 text-center">
          <img
            src="https://www.emaar.com/wp-content/uploads/2023/10/digital-experiance.png"
            alt="Emaar One App"
            className="img-fluid emaar-app-image"
          />
        </div>
      </div>
    </section>
  );
}

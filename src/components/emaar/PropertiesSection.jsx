import React from "react";
import "./PropertiesSection.css";

export function PropertiesSection() {
  const properties = [
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/10/FEATURES_1200X655_1-4-440x570.jpg",
      title: "Lyvia by Palace at Dubai Creek Harbour / Dubai Creek Harbour",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/10/HERO_1620X832_2-706x385.jpg",
      title: "Aurea At Rashid Yachts & Marina / Rashid Yachts & Marina",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/VINDERA_TH_HOMEPAGE_BANNER_1920x1080-706x385.jpg",
      title: "Vindera at The Valley / The Valley",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/CHEVALIA-ESTATE2_GP_HOMEPAGE_BANNER_1920x1080-706x385.jpg",
      title: "Chevalia Estate 2 / Grand Polo Club & Resort",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/SERA_RYM_DHE_BANNER_WEB_1920X1080-1-706x385.jpg",
      title: "Sera 2 at Rashid Yachts & Marina / Rashid Yachts & Marina",
    },
  ];

  return (
    <section className="properties-section container py-5">
      {/* TOP LABEL */}
      <div className="section-header ">
        <h6 className="text-secondary fw-semibold mb-1 ">PROPERTIES</h6>
      </div>

      <div className="row align-items-center gx-5 gy-3">
        {/* LEFT TEXT SECTION */}
        <div className="col-lg-5 text-section">
          <h2 className="fw-bold text-dark mb-3 no-top-gap">
            PREMIUM<br></br> PROPERTIES IN<br></br>THE BEST<br></br> LOCATIONS
          </h2>
          <p className="text-muted mb-4">
           Our prestigious properties are located in prime areas, bringing together striking architecture and modern luxury. Each community features unique designs and aspirational lifestyles, all seamlessly managed by Emaar Community Management's dedicated team.<br></br>
As a global leader in luxury real estate, Emaar Properties offers more than just homes — we create landmarks that define real estate in Dubai. From elegantly crafted apartments overlooking the skyline to peaceful villas immersed in nature, every space is designed to inspire, elevate, and captivate.
With a legacy of excellence and innovation, Emaar invites you to explore extraordinary living in communities where every detail is refined.
          </p>
          <button className="btn btn-dark btn-lg px-4">
            VIEW ALL PROPERTIES
          </button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="col-lg-7">
          <div className="image-grid">
            <div className="left-images">
              {properties.slice(0, 2).map((prop, index) => (
                <div
                  key={index}
                  className={`property-card ${index === 0 ? "large-card" : ""}`}
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="property-image"
                  />
                  <h6 className="property-title">{prop.title}</h6>
                </div>
              ))}
            </div>

            <div className="right-images">
              {properties.slice(2).map((prop, index) => (
                <div key={index} className="property-card small-card">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="property-image"
                  />
                  <h6 className="property-title">{prop.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

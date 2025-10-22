import React from "react";
import "./Hero.css";
import { FilterSection } from "./FilterSection";

export function Hero() {
  const slides = [
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2025/10/LYVIA_DCH_HOMEPAGE_BANNER_1920x1080.jpg",
      title: "Lyvia By Palace at Dubai Creek Harbour",
      subtitle: "Serene Haven of Branded Living",
    },
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2025/10/AUREA_RYM_DHE_BANNER_WEB_1920X1080.jpg",
      title: "Aurea at Rashid Yachts & Marina",
      subtitle: "Your Marinafront Home Awaits",
    },
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2025/09/VINDERA_TH_HOMEPAGE_BANNER_1920x1080.jpg",
      title: "Vindera at The Valley",
      subtitle: "Your Exclusive World of Idyllic Luxury",
    },
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2025/09/CHEVALIA-ESTATE2_GP_HOMEPAGE_BANNER_1920x1080.jpg",
      title: "Chevalia Estate 2",
      subtitle: "Grandeur Estate Living, Inspired by Equestrian Legacy",
    },
    {
      image: "https://www.emaar.com/wp-content/uploads/2025/09/SERA.webp",
      title: "Sera 2 at Rashid Yachts & Marina",
      subtitle: "Welcome to an exclusive residential sanctuary",
    },
    {
      image: "https://www.emaar.com/wp-content/uploads/2025/09/Montiva.webp",
      title: "Montiva by Vida at Dubai Creek Harbour ",
      subtitle: "Beyond Ordinary, Inspired by Nature",
    },
  ];

  return (
    <header className="position-relative">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(2,32,71,0.55), rgba(2,32,71,0.55)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "520px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="container text-white">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h1 className="display-5 fw-bold">{slide.title}</h1>
                      <p className="lead">{slide.subtitle}</p>
                      <div className="d-grid col-12 col-md-4 mt-3">
                        <button className="btn btn-light btn-lg">
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ✅ Floating FilterSection */}
      <div className="floating-filter">
        <FilterSection />
      </div>
    </header>
  );
}

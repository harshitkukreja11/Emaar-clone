// src/components/emaar/Header.jsx
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaVideo } from "react-icons/fa";
import "./Header.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-overlay ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand fw-bold" href="#">
            EMAAR
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["ABOUT US", "LATEST LAUNCHES", "COMMUNITIES", "SUSTAINIBILITY"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link nav-hover" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right section */}
            <div className="d-flex align-items-center gap-3">
              {/* Language dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-light btn-sm dropdown-toggle"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ENG
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="languageDropdown"
                >
                  <li><a className="dropdown-item" href="#">العربية</a></li>
                  <li><a className="dropdown-item" href="#">中文</a></li>
                  <li><a className="dropdown-item" href="#">FR</a></li>
                </ul>
              </div>

              {/* Video call icon */}
              <a href="#" className="icon-link">
                <FaVideo />
              </a>

              {/* WhatsApp icon */}
              <a href="#" className="icon-link">
                <FaWhatsapp />
              </a>

              {/* Get in touch */}
              <button className="btn btn-light btn-md text-black">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

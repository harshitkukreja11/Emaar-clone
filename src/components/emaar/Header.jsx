import React, { useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaVideo } from "react-icons/fa";
import "./Header.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef(null);

  // Track scroll for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust hero padding
  const adjustHeroPadding = () => {
    const hero = document.querySelector(".hero-section");
    if (hero && headerRef.current) {
      hero.style.paddingTop = `${headerRef.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeroPadding();
    window.addEventListener("resize", adjustHeroPadding);
    return () => window.removeEventListener("resize", adjustHeroPadding);
  }, [menuOpen]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".mobile-drawer") && !e.target.closest(".navbar-toggler")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) document.body.classList.add("drawer-open");
    else document.body.classList.remove("drawer-open");
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`header-overlay ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">EMAAR</a>

          {/* Hamburger */}
          <button
            className={`navbar-toggler ${menuOpen ? "active" : ""}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Desktop menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["ABOUT US", "LATEST LAUNCHES", "COMMUNITIES", "SUSTAINIBILITY"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link nav-hover" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav flex-column">
            {["ABOUT US", "LATEST LAUNCHES", "COMMUNITIES", "SUSTAINIBILITY"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link nav-hover" href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-column gap-3 mt-4">
            <button
              className="btn btn-outline-dark btn-sm dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              ENG
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">العربية</a></li>
                <li><a className="dropdown-item" href="#">中文</a></li>
                <li><a className="dropdown-item" href="#">FR</a></li>
              </ul>
            )}
            <a href="#" className="icon-link text-dark"><FaVideo /></a>
            <a href="#" className="icon-link text-dark"><FaWhatsapp /></a>
            <button className="btn btn-dark btn-md text-white">GET IN TOUCH</button>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}
      </nav>
    </header>
  );
}

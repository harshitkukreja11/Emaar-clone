import React, { useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaVideo } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";


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
          <a className="navbar-brand fw-bold" href="/">EMAAR</a>

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
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 s">
    <li className="nav-item dropdown">
      <Link
        to="/about"
        className="nav-link nav-hover dropdown-toggle"
        onClick={() => setMenuOpen(false)}
      >
        ABOUT US
      </Link>
      {/* Dropdown Menu (optional for future subpages) */}
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/about">About Emaar</Link></li>
        <li><Link className="dropdown-item" to="#">Leadership</Link></li>
        <li><Link className="dropdown-item" to="#">Our History</Link></li>
        <li><Link className="dropdown-item" to="#">Careers</Link></li>
      </ul>
    </li>

    <li className="nav-item">
      <Link
        className="nav-link nav-hover"
        to="#"
        onClick={() => setMenuOpen(false)}
      >
        LATEST LAUNCHES
      </Link>
    </li>

    <li className="nav-item">
      <Link
        className="nav-link nav-hover"
        to="#"
        onClick={() => setMenuOpen(false)}
      >
        COMMUNITIES
      </Link>
    </li>

    <li className="nav-item">
      <Link
        className="nav-link nav-hover"
        to="#"
        onClick={() => setMenuOpen(false)}
      >
        SUSTAINIBILITY
      </Link>
    </li>
  </ul>
</div>

        </div>

       {/* Mobile drawer */}
<div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
  <ul className="navbar-nav flex-column">
    {[
      { label: "ABOUT US", path: "/about" },
      { label: "LATEST LAUNCHES", path: "/launches" },
      { label: "COMMUNITIES", path: "/communities" },
      { label: "SUSTAINIBILITY", path: "/sustainability" },
    ].map((item) => (
      <li className="nav-item" key={item.label}>
        <Link
          to={item.path}
          className="nav-link nav-hover"
          onClick={() => setMenuOpen(false)} // closes drawer on click
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>

  <div className="d-flex flex-column gap-3 mt-4">
    <button className="btn btn-outline-dark btn-sm">ENG</button>
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

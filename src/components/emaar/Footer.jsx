import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Footer.css";

export function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "About Emaar",
      items: [
        { name: "Who We Are" },
        { name: "Contact Us", link: "/contact" }, // ✅ Added link
        { name: "FAQ" },
        { name: "Careers" },
        { name: "Whistleblower Line" },
        { name: "Investor Relations" },
        { name: "Press Releases" },
        { name: "Emaar Blogs" },
        { name: "Emaar Brand" },
        { name: "Mortgage Calculator" },
        { name: "Scam Alerts" },
        { name: "Emaar Sustainability" },
        { name: "Real Estate Glossary" },
      ],
    },
    {
      title: "Communities",
      items: [
        { name: "Expo Living" },
        { name: "The Oasis" },
        { name: "The Heights Country Club & Wellness" },
        { name: "Address Al Marjan Island" },
        { name: "Dubai Hills Estate" },
        { name: "Dubai Creek Harbour" },
        { name: "The Valley" },
        { name: "Emaar Beachfront" },
        { name: "Rashid Yachts & Marina" },
        { name: "Dubai Marina" },
        { name: "Downtown Dubai" },
        { name: "Arabian Ranches III" },
        { name: "Emaar South" },
      ],
    },
    {
      title: "Latest Launches",
      items: [
        { name: "Lyvia by Palace at Dubai Creek Harbour" },
        { name: "Aurea at Rashid Yachts & Marina" },
        { name: "Vindera at The Valley" },
        { name: "Chevalia Estate 2" },
        { name: "Sera 2 at Rashid Yachts & Marina" },
        { name: "Selvara 3 at Grand Polo Club & Resort" },
        { name: "Selvara 4 at Grand Polo Club & Resort" },
        { name: "Montiva by Vida at Dubai Creek Harbour" },
        { name: "Baystar by Vida at Rashid Yachts & Marina" },
        { name: "Rosehill at Dubai Hills Estate" },
        { name: "View All Properties" },
      ],
    },
    {
      title: "Emaar International",
      items: [
        { name: "KSA" },
        { name: "India" },
        { name: "Pakistan" },
        { name: "Egypt" },
        { name: "Morocco" },
        { name: "Turkey" },
        { name: "Others" },
        { name: "Emaar Community Management" },
        { name: "Vyom" },
      ],
    },
    {
      title: "Emaar Entertainment",
      items: [
        { name: "Burj Khalifa" },
        { name: "Reel Cinemas" },
        { name: "Dubai Opera" },
        { name: "Dubai Ice Rink" },
        { name: "KidZania" },
        { name: "Sky Views Dubai" },
        { name: "Dubai Aquarium" },
        { name: "Arabic Music Institute" },
        { name: "Dubai Fountain" },
        { name: "View All" },
      ],
    },
    {
      title: "Emaar Malls",
      items: [
        { name: "Dubai Mall" },
        { name: "Dubai Marina Mall" },
        { name: "Dubai Hills Mall" },
        { name: "Gold and Diamond Park" },
        { name: "Souk Al Bahar" },
        { name: "The Springs Souk" },
      ],
    },
    {
      title: "Emaar Hospitality",
      items: [
        { name: "Address Hotels + Resorts" },
        { name: "Vida Hotels and Resorts" },
        { name: "Armani Hotels & Resorts" },
        { name: "Al Alamein Hotel Egypt" },
        { name: "Rove Hotels" },
      ],
    },
    {
      title: "Emaar Leisure Group",
      items: [
        { name: "Dubai Polo & Equestrian Club" },
        { name: "Arabian Ranches Golf Club" },
        { name: "Dubai Hills Golf Club" },
        { name: "Dubai Marina Yacht Club" },
        { name: "Creek Marina Yacht Club" },
        { name: "Veo Fitness" },
      ],
    },
  ];

  const trendingSearches = [
    [
      "Apartments for Sale in Dubai",
      "1 Bedroom Apartments for Sale",
      "2 Bedroom Apartments for Sale",
      "3 Bedroom Apartments for Sale",
    ],
    [
      "Villas for Sale in Dubai",
      "Townhouses for Sale in Dubai",
      "Penthouse for Sale",
      "Property Investment in Dubai",
    ],
    [
      "Off-plan Projects",
      "Dubai Creek Harbour",
      "Dubai Hills Estate",
      "Dubai Marina",
    ],
    ["Arabian Ranches", "The Oasis", "Emaar Beachfront"],
  ];

  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        {/* 🔹 Top Row */}
        <div className="row align-items-center border-bottom pb-4 mb-4">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h2 className="fw-bold mb-0">EMAAR</h2>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <form className="d-flex justify-content-center justify-content-md-end">
              <input
                type="email"
                placeholder="Enter email"
                className="form-control w-75 w-md-50 me-2 mb-2 mb-md-0"
              />
              <button className="btn btn-secondary" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* 🔹 Footer Sections */}
        <div className="footer-sections">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <div
                className="footer-section-header d-flex justify-content-between align-items-center"
                onClick={() => toggleSection(index)}
              >
                <h6 className="fw-bold mb-0">{section.title}</h6>
                <span className="toggle-icon d-md-none">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <ul
                className={`list-unstyled footer-list ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                {section.items.map((item, i) => (
                  <li key={i}>
                    {item.link ? (
                      <Link to={item.link} className="text-decoration-none text-dark">
                        {item.name}
                      </Link>
                    ) : (
                      item.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🔹 Trending Searches */}
        <div className="mt-4">
          <h6 className="fw-bold mb-3">Trending Searches</h6>
          <div className="row gy-3">
            {trendingSearches.map((col, i) => (
              <div key={i} className="col-6 col-md-3">
                <ul className="list-unstyled footer-list">
                  {col.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Footer Bottom */}
        <div className="border-top pt-3 mt-4 text-center small footer-bottom-text">
          Privacy Policy | Emaar Asset Usage Policy | Terms & Conditions | Country and Language
        </div>
      </div>
    </footer>
  );
}

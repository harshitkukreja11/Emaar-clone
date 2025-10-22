import React, { useState } from "react";
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
        "Who We Are",
        "Contact Us",
        "FAQ",
        "Careers",
        "Whistleblower Line",
        "Investor Relations",
        "Press Releases",
        "Emaar Blogs",
        "Emaar Brand",
        "Mortgage Calculator",
        "Scam Alerts",
        "Emaar Sustainability",
        "Real Estate Glossary",
      ],
    },
    {
      title: "Communities",
      items: [
        "Expo Living",
        "The Oasis",
        "The Heights Country Club & Wellness",
        "Address Al Marjan Island",
        "Dubai Hills Estate",
        "Dubai Creek Harbour",
        "The Valley",
        "Emaar Beachfront",
        "Rashid Yachts & Marina",
        "Dubai Marina",
        "Downtown Dubai",
        "Arabian Ranches III",
        "Emaar South",
      ],
    },
    {
      title: "Latest Launches",
      items: [
        "Lyvia by Palace at Dubai Creek Harbour",
        "Aurea at Rashid Yachts & Marina",
        "Vindera at The Valley",
        "Chevalia Estate 2",
        "Sera 2 at Rashid Yachts & Marina",
        "Selvara 3 at Grand Polo Club & Resort",
        "Selvara 4 at Grand Polo Club & Resort",
        "Montiva by Vida at Dubai Creek Harbour",
        "Baystar by Vida at Rashid Yachts & Marina",
        "Rosehill at Dubai Hills Estate",
        "View All Properties",
      ],
    },
    {
      title: "Emaar International",
      items: [
        "KSA",
        "India",
        "Pakistan",
        "Egypt",
        "Morocco",
        "Turkey",
        "Others",
        "Emaar Community Management",
        "Vyom",
      ],
    },
    {
      title: "Emaar Entertainment",
      items: [
        "Burj Khalifa",
        "Reel Cinemas",
        "Dubai Opera",
        "Dubai Ice Rink",
        "KidZania",
        "Sky Views Dubai",
        "Dubai Aquarium",
        "Arabic Music Institute",
        "Dubai Fountain",
        "View All",
      ],
    },
    {
      title: "Emaar Malls",
      items: [
        "Dubai Mall",
        "Dubai Marina Mall",
        "Dubai Hills Mall",
        "Gold and Diamond Park",
        "Souk Al Bahar",
        "The Springs Souk",
      ],
    },
    {
      title: "Emaar Hospitality",
      items: [
        "Address Hotels + Resorts",
        "Vida Hotels and Resorts",
        "Armani Hotels & Resorts",
        "Al Alamein Hotel Egypt",
        "Rove Hotels",
      ],
    },
    {
      title: "Emaar Leisure Group",
      items: [
        "Dubai Polo & Equestrian Club",
        "Arabian Ranches Golf Club",
        "Dubai Hills Golf Club",
        "Dubai Marina Yacht Club",
        "Creek Marina Yacht Club",
        "Veo Fitness",
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
                  <li key={i}>{item}</li>
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

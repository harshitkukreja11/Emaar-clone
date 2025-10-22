import React from "react";
import "./Footer.css";


export  function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        {/* Top Row */}
        <div className="row align-items-center border-bottom pb-4 mb-4">
          {/* Left: Emaar */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h2 className="fw-bold mb-0">EMAAR</h2>
          </div>

          {/* Right: Email Subscription */}
          <div className="col-md-6">
            <form className="text-md-end">
              <div className="input-group mb-2 justify-content-md-end">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="form-control w-50"
                />
                <button className="btn btn-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* MAIN SECTIONS */}
        <div className="row gy-4">
          {/* 1️⃣ About Emaar */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">About Emaar</h6>
            <ul className="list-unstyled large">
              <li>Who We Are</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Careers</li>
              <li>Whistleblower Line</li>
              <li>Investor Relations</li>
              <li>Press Releases</li>
              <li>Emaar Blogs</li>
              <li>Emaar Brand</li>
              <li>Mortgage Calculator</li>
              <li>Scam Alerts</li>
              <li>Emaar Sustainability</li>
              <li>Real Estate Glossary</li>
            </ul>
          </div>

          {/* 2️⃣ Communities */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Communities</h6>
            <ul className="list-unstyled large">
              <li>Expo Living</li>
              <li>The Oasis</li>
              <li>The Heights Country Club & Wellness</li>
              <li>Address Al Marjan Island</li>
              <li>Dubai Hills Estate</li>
              <li>Dubai Creek Harbour</li>
              <li>The Valley</li>
              <li>Emaar Beachfront</li>
              <li>Rashid Yachts & Marina</li>
              <li>Dubai Marina</li>
              <li>Downtown Dubai</li>
              <li>Arabian Ranches III</li>
              <li>Emaar South</li>
            </ul>
          </div>

          {/* 3️⃣ Latest Launches */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Latest Launches</h6>
            <ul className="list-unstyled large">
              <li>Lyvia by Palace at Dubai Creek Harbour</li>
              <li>Aurea at Rashid Yachts & Marina</li>
              <li>Vindera at The Valley</li>
              <li>Chevalia Estate 2</li>
              <li>Sera 2 at Rashid Yachts & Marina</li>
              <li>Selvara 3 at Grand Polo Club & Resort</li>
              <li>Selvara 4 at Grand Polo Club & Resort</li>
              <li>Montiva by Vida at Dubai Creek Harbour</li>
              <li>Baystar by Vida at Rashid Yachts & Marina</li>
              <li>Rosehill at Dubai Hills Estate</li>
              <li>View All Properties</li>
            </ul>
          </div>

          {/* 4️⃣ Emaar International */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Emaar International</h6>
            <ul className="list-unstyled large">
              <li>KSA</li>
              <li>India</li>
              <li>Pakistan</li>
              <li>Egypt</li>
              <li>Morocco</li>
              <li>Turkey</li>
              <li>Others</li>
              <li>Emaar Community Management</li>
              <li>Vyom</li>
            </ul>
          </div>
        </div>

        

        {/* SECOND SECTION */}
        <div className="row gy-4">
          {/* 5️⃣ Emaar Entertainment */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Emaar Entertainment</h6>
            <ul className="list-unstyled large">
              <li>Burj Khalifa</li>
              <li>Reel Cinemas</li>
              <li>Dubai Opera</li>
              <li>Dubai Ice Rink</li>
              <li>KidZania</li>
              <li>Sky Views Dubai</li>
              <li>Dubai Aquarium</li>
              <li>Arabic Music Institute</li>
              <li>Dubai Fountain</li>
              <li>View All</li>
            </ul>
          </div>

          {/* 6️⃣ Emaar Malls */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Emaar Malls</h6>
            <ul className="list-unstyled large">
              <li>Dubai Mall</li>
              <li>Dubai Marina Mall</li>
              <li>Dubai Hills Mall</li>
              <li>Gold and Diamond Park</li>
              <li>Souk Al Bahar</li>
              <li>The Springs Souk</li>
            </ul>
          </div>

          {/* 7️⃣ Emaar Hospitality */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Emaar Hospitality</h6>
            <ul className="list-unstyled large">
              <li>Address Hotels + Resorts</li>
              <li>Vida Hotels and Resorts</li>
              <li>Armani Hotels & Resorts</li>
              <li>Al Alamein Hotel Egypt</li>
              <li>Rove Hotels</li>
            </ul>
          </div>

          {/* 8️⃣ Emaar Leisure Group */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Emaar Leisure Group</h6>
            <ul className="list-unstyled large">
              <li>Dubai Polo & Equestrian Club</li>
              <li>Arabian Ranches Golf Club</li>
              <li>Dubai Hills Golf Club</li>
              <li>Dubai Marina Yacht Club</li>
              <li>Creek Marina Yacht Club</li>
              <li>Veo Fitness</li>
            </ul>
          </div>

         {/* 9️⃣ Trending Searches */}
<div className="col-12">
  <h6 className="fw-bold mb-3">Trending Searches</h6>
  <div className="row">
    <div className="col-6 col-md-3">
      <ul className="list-unstyled large footer-links">
        <li>Apartments for Sale in Dubai</li>
        <li>1 Bedroom Apartments for Sale</li>
        <li>2 Bedroom Apartments for Sale</li>
        <li>3 Bedroom Apartments for Sale</li>
      </ul>
    </div>
    <div className="col-6 col-md-3">
      <ul className="list-unstyled large footer-links">
        <li>Villas for Sale in Dubai</li>
        <li>Townhouses for Sale in Dubai</li>
        <li>Penthouse for Sale</li>
        <li>Property Investment in Dubai</li>
      </ul>
    </div>
    <div className="col-6 col-md-3">
      <ul className="list-unstyled large footer-links">
        <li>Off-plan Projects</li>
        <li>Dubai Creek Harbour</li>
        <li>Dubai Hills Estate</li>
        <li>Dubai Marina</li>
      </ul>
    </div>
    <div className="col-6 col-md-3">
      <ul className="list-unstyled large footer-links">
        <li>Arabian Ranches</li>
        <li>The Oasis</li>
        <li>Emaar Beachfront</li>
      </ul>
    </div>
  </div>
</div>
</div>
{/* Footer Bottom */}
<div className="border-top pt-3 mt-4 text-center large footer-bottom-text">
  Privacy Policy | Emaar Asset Usage Policy | Terms & Conditions | Country and Language
</div>

        
      </div>
    </footer>
  );
}

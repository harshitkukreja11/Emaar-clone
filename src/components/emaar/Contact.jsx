import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="contact-hero text-center text-black">
        <div className="container py-5">
          <h1 className="fw-bold display-5 mb-3">CONTACT US</h1>
          <p className="lead">Have any questions? We're happy to answer.</p>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/01-HERO-IMAGE-001-1536x439-1.jpg"
            alt="Contact Banner"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* ===== Help Section ===== */}
      <section className="help-section py-5">
        <div className="container">
          <div className="row gy-5">
            {/* Left: What can we help you with */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">WHAT CAN WE HELP YOU WITH?</h3>
              <select className="form-select mb-4 shadow-sm">
                <option>Please Select</option>
                <option>Property Inquiry</option>
                <option>After Sales Support</option>
                <option>Leasing</option>
                <option>Careers</option>
                <option>Media Inquiry</option>
              </select>

              
            </div>

            {/* Right: Office Locations */}
            <div className="col-lg-6">
                <p className="mt-4">
                <strong>Call us Toll free (24/7) on</strong>
                <br />800 EMAAR (36227)
              </p>
              <p>
                If calling from outside the UAE, please contact us on
                <br />
                <strong>+971 4 366 1688</strong>
                <br />
                (International call rates apply).
              </p>
              <h3 className="fw-bold mb-4">United Arab Emirates</h3>

              {/* Office 1 */}
              <div className="office mb-4">
                <h5 className="fw-bold">Emaar Corporate Headquarters</h5>
                <p>
                  Level 7, Dubai Hills Business Park Bldg 1<br />
                  Dubai Hills Estate
                  <br />
                  Monday – Friday: 08:00 AM – 5:30 PM
                </p>
                <a href="#" className="view-link">View Location</a>
              </div>

              {/* Office 2 */}
              <div className="office mb-4">
                <h5 className="fw-bold">Downtown Dubai Sales Centre</h5>
                <p>
                  Emaar Sales Centre, Next to Souk Al Bahar<br />
                  Downtown Dubai, PO Box: 9440
                  <br />
                  Sunday to Friday: 9:30 AM – 10:00 PM<br />
                  Saturday: 9:30 AM – 7:00 PM
                </p>
                <a href="#" className="view-link">View Location</a>
              </div>

              {/* Office 3 */}
              <div className="office mb-4">
                <h5 className="fw-bold">Dubai Hills Estate Sales Pavilion</h5>
                <p>
                  Dubai Hills Estate, Umm Suqeim Road
                  <br />
                  Sunday to Friday: 9:30 AM – 7:00 PM<br />
                  Saturday: 9:30 AM – 7:00 PM
                </p>
                <a href="#" className="view-link">View Location</a>
              </div>

              {/* Office 4 */}
              <div className="office mb-4">
                <h5 className="fw-bold">Dubai Creek Harbour Sales Centre</h5>
                <p>
                  Sunday to Friday: 9:30 AM – 7:00 PM<br />
                  Saturday: 9:30 AM – 7:00 PM
                </p>
                <a href="#" className="view-link">View Location</a>
              </div>

              {/* Office 5 */}
              <div className="office">
                <h5 className="fw-bold">Emaar Abu Dhabi Sales Centre</h5>
                <p>
                  Al Nahda Tower, Ground Floor<br />
                  Corniche – Muroor Road, Abu Dhabi, UAE
                  <br />
                  Tel: +971 2 410 1000
                  <br />
                  Monday to Friday: 9:30 AM – 7:00 PM<br />
                  Saturday & Sunday: Closed
                </p>
                <a href="#" className="view-link">View Location</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;

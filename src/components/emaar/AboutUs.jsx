import React,{ useRef } from "react";
import { Header } from "./Header";
import { Footer }from "./Footer";
import "./AboutUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function AboutPage() {
  const properties = [
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2021/09/TURKEY2-440x570.jpg",
      title: "TURKEY",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2021/09/EGYPT-706x385.jpg",
      title: "Egypt",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2021/09/LEBANON2-1-706x385.jpg",
      title: "Lebanon",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2021/09/INDIA-1-706x385.jpg",
      title: "India",
    },
    {
      image: "https://cdn.properties.emaar.com/wp-content/uploads/2021/09/PAKISTAN-706x385.jpg",
      title: "Pakistan",
    },
  ];
  const communities = [
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/Sustainable-320x415.jpg",
    name: "Sustainable Facility Management Organization of the Year",
    desc: "MENA Green Building Awards",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/Reel-Junior-1-e1711948774887-320x415.jpg",
    name: "Certified Autism Center™ ",
    desc: "Designation from IBCCES",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/03/output-onlinetools-320x415.png",
    name: "LEED Platinum Certification ",
    desc: "Operations and Maintenance: Existing Buildings ",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/02/Arabian-Business-Achievement-Award-320x415.jpg",
    name: "Developer of the Year ",
    desc: "Arabian Business Achievement Awards",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/kidzania-dubai-320x415.webp",
    name: " KidZania- Best Edutainment Center ",
    desc: "MENALAC",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/8e0xkrHk-Reel_Junior_2-320x415.jpg",
    name: "Reel Cinemas - Best Cinema Experience",
    desc: "MENALAC",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/edge-walk-1920-320x415.jpg",
    name: "Skyviews Observatory - Most Unique Visitor Attraction",
    desc: "MENALAC.",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-08-18-at-16.29.01-1-1-320x415.jpeg",
    name: "Address Grand Creek Harbour - Highly Commended “FM Mobilisation of the Year",
    desc: "Facilities Management Awards, Middle East",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/MicrosoftTeams-image-9-320x415.jpg",
    name: "Dubai Hills Park -  Sustainability Prize ",
    desc: "Landscape Middle East Awards in Parks & Recreation",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/ECM-Emerges-Overall-Gulf-Real-Estate-Winner-320x415.jpg",
    name: "ECM - Overall Winner Award",
    desc: "Gulf Real Estate Awards ",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/Screenshot-2024-01-04-115751-320x415.png",
    name: "ECM - Community Management Company of the Year",
    desc: "Smart Built Environment Awards (SBE)",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2021/04/320x415_A-320x415.jpg",
    name: "Address Beach Resort - World’s tallest infinity pool",
    desc: "Guinness World Records™",
  },
  {
    img: "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/The-Dubai-Mall-2-320x415.jpg",
    name: "Dubai Mall - Best Customer Experience",
    desc: "World Retail Awards.",
  },
];
 const swiperRef = useRef(null);

  return (
    <>
      {/* Header */}
      <Header />

    


      {/* ✅ Overview Section */}
<section className="overview-section position-relative">
  <div className="overview-image-wrapper">
    <img
      src="https://cdn.properties.emaar.com/wp-content/uploads/2020/07/BK_2600x1470-scaled-1-1620x740.jpg"
      alt="Emaar Overview"
      className="overview-image w-100"
    />
    <div className="overview-text p-4 p-lg-5">
      <h6 className="fw-bold mb-3 text-secondary">Overview</h6>
      <h1 className="fw-semibold mb-3">About Emaar Properties</h1>
      <p className="text-secondary">
        With a net asset value of AED 177.5 Bn (USD 48.3 Bn)*, Emaar Properties is
        among the most admired and valuable real estate development companies in
        the world. Emaar, which has established competencies in real estate,
        retail and shopping malls, hospitality, and leisure, shapes new lifestyles
        through its commitment to design excellence, build quality, and timely
        delivery.
      </p>
      <p className="text-black fst-italic small">
        *As of 31st December 2023, and based on the valuation of assets done by a third-party valuer.
      </p>
    </div>
  </div>
</section>

{/* ✅ Chairman Message Section */}
      <section className="chairman-section position-relative">
        <img
          src="https://cdn.properties.emaar.com/wp-content/uploads/2022/04/chairman-image-1620x740-1-1620x740.png"
          alt="Chairman Mohamed Alabbar"
          className="chairman-image w-100"
        />
        <div className="chairman-text">
          <h2 className="quote">
            “WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES”
          </h2>
          <p className="founder text-secondary">
            <strong>Founder | Mohamed Alabbar</strong>
          </p>
          <button className="btn btn-dark btn-lg ">
            READ FOUNDER'S LETTER
          </button>
        </div>
      </section>
      {/* ✅ Who We Are Section */}
<section className="who-we-are-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Who We Are</h2>

    <div className="row g-4">
      {/* Column 1 */}
      <div className="col-md-4">
        <div className="who-card p-4  text-center">
          <h5 className="fw-semibold mb-3 text-black">
            EMAAR PROPERTIES BOARD OF DIRECTORS
          </h5>
          <p className="text-muted mb-4">
            Emaar's leadership team is comprised<br></br> of the industry's most experienced
            leaders, who have secured our<br></br> place as one of the world's greatest real<br></br>
            estate and lifestyle developers.
          </p>
          <a href="#" className="btn btn-secondary  px-4 py-2 fw-semibold">
            Learn More
          </a>
        </div>
      </div>

      {/* Column 2 */}
      <div className="col-md-4">
        <div className="who-card p-4  text-center">
          <h5 className="fw-semibold mb-3 text-black">
            EMAAR DEVELOPMENT BOARD OF DIRECTORS
          </h5>
          <p className="text-muted mb-4">
            With their combined wisdom and<br></br> innovative approach, Emaar Development's
            leadership has been essential in establishing Emaar as a top-tier real<br></br>
            estate and lifestyle developer.
          </p>
          <a href="#" className="btn btn-secondary px-4 py-2 fw-semibold">
            Learn More
          </a>
        </div>
      </div>

      {/* Column 3 */}
      <div className="col-md-4">
        <div className="who-card p-4  text-center">
          <h5 className="fw-semibold mb-3 text-black">PRINCIPAL OFFICERS</h5>
          <p className="text-muted mb-4">
            Emaar has built a team of motivated officers,<br></br> united in their commitment
            to excellence.<br></br> This dedication stands strong, even amidst our many
            achievements and accolades, ensuring a constant drive for improvement.
          </p>
          <a href="#" className="btn btn-secondary px-4 py-2 fw-semibold">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ✅ Properties Section */}
<section className="properties-section container py-5">
  <div className="section-header mb-0">
    <h6 className="text-secondary fw-semibold properties-label">PROPERTIES</h6>
  </div>

  <div className="row align-items-center gx-5 gy-3 no-gap-between">
    {/* LEFT TEXT SECTION */}
    <div className="col-lg-5 text-section">
      <h2 className="fw-bold text-dark mb-3 no-top-gap">
        International Destinations
      </h2>
      <p className="text-muted mb-4">
        Our properties each have their own unique design aesthetic, providing an
        aspirational lifestyle within a thriving community, supported by Emaar’s
        community management team.
      </p>
      <button className="btn btn-dark btn-lg px-4">
        VIEW ALL DESTINATIONS
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
{/* ✅ More Section */}
<section className="more-section py-5">
  <div className="container">
    <h6 className="text-left text-secondary ">MORE</h6>
    <h2 className="text-left ">OTHER EMAAR BUSINESSES</h2>
    <div className="row g-4">
      <div className="col-6 col-md-3 text-center">
        <img
          src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-hospitality-320x415.jpg"
          alt="Emaar Hospitality"
          className="img-fluid  mb-3 more-image"
        />
        <h4 className="fw-semibold">Emaar Hospitality</h4>
      </div>
      <div className="col-6 col-md-3 text-center">
        <img
          src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-malls-320x415.jpg"
          alt="Emaar Malls"
          className="img-fluid  mb-3 more-image"
        />
        <h4 className="fw-semibold">Emaar Malls</h4>
      </div>
      <div className="col-6 col-md-3 text-center">
        <img
          src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/burj-khalifa-320x415.jpg"
          alt="Burj Khalifa"
          className="img-fluid mb-3 more-image"
        />
        <h4 className="fw-semibold">Burj Khalifa</h4>
      </div>
      <div className="col-6 col-md-3 text-center">
        <img
          src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-entertainment-320x415.jpg"
          alt="Emaar Entertainment"
          className="img-fluid  mb-3 more-image"
        />
        <h4 className="fw-semibold">Emaar Entertainment</h4>
      </div>
    </div>
  </div>
</section>
{/* ✅ Corporate Sections */}
<section className="corporate-section py-5">
  <div className="container">
    <div className="row g-4">
      {/* Box 1 */}
      <div className="col-md-4">
        <div className="corporate-card text-left p-3 h-100">
          <img
            src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/investor-relations-440x280.png"
            alt="Investor Relations"
            className="img-fluid  mb-3 corporate-image"
          />
          <h5 className="fw-semibold mb-2">Investor Relations</h5>
          <p className="mb-3">
            Emaar is a Public Joint Stock Company listed on the Dubai Financial
            Market. View Emaar’s stock market trends and related data.
          </p>
          <button className="btn ">LEARN MORE</button>
        </div>
      </div>

      {/* Box 2 */}
      <div className="col-md-4">
        <div className="corporate-card text-left p-3 h-100">
          <img
            src="https://cdn.properties.emaar.com/wp-content/uploads/2023/05/sustainability-banner-mobile-440x280.jpg"
            alt="Corporate Sustainability"
            className="img-fluid  mb-3 corporate-image"
          />
          <h5 className="fw-semibold mb-2">Corporate Sustainability</h5>
          <p className=" mb-3">
            We consider sustainability to be a fundamental aspect of our lives.
            It is an investment in the future for both society and ourselves.
          </p>
          <button className="btn ">LEARN MORE</button>
        </div>
      </div>

      {/* Box 3 */}
      <div className="col-md-4">
        <div className="corporate-card text-left p-3 h-100">
          <img
            src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-foundation-440x280.png"
            alt="Emaar Foundation"
            className="img-fluid mb-3 corporate-image"
          />
          <h5 className="fw-semibold mb-2">Emaar Foundation</h5>
          <p className=" mb-3">
            The Emaar Foundation, a part of Emaar Properties, focuses on driving
            and coordinating the group's corporate social responsibility efforts.
          </p>
          <button className="btn ">LEARN MORE</button>
        </div>
      </div>
    </div>
  </div>
</section>


{/*Awards*/}

<section className="communities-section container my-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold mt-2">FEATURED AWARDS</h2>
      </div>

      {/* Swiper Section */}
      <div className="position-relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="communities-swiper"
        >
          {communities.map((community, index) => (
            <SwiperSlide key={index}>
              <div className="community-card text-center">
                <img
                  src={community.img}
                  alt={community.name}
                  className="img-fluid community-img"
                />
                <div className="community-info mt-3 px-2">
                  <h5 className="fw-semibold text-dark">{community.name}</h5>
                  <p className="text-muted small mb-0">{community.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Arrows Below in Center */}
        <div className="nav-arrows-below text-center mt-4">
          <button
            className="arrow-btn mx-2"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            ❮
          </button>
          <button
            className="arrow-btn mx-2"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            ❯
          </button>
        </div>
      </div>

      {/* Button Below */}
      <div className="text-center mt-4">
        <a href="#" className="btn btn-secondary px-4 py-2 fw-semibold">
          View All Awards
        </a>
      </div>
    </section>


      <Footer />
    </>
  );
}

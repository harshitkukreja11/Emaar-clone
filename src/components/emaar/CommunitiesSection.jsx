import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CommunitiesSection.css";

const communities = [
  {
    img: "https://www.emaar.com/wp-content/uploads/2024/11/COMMUNITY_FEATURED_320X415.jpg",
    name: "Expo Living",
    desc: "A community designed for tomorrow 1 & 2 bedroom apartments",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2024/06/THE-HEIGHT-_320X415.jpeg",
    name: "The Heights Country Club & Wellness",
    desc: "Where Life is Well-Lived 3 & 4 Bedroom Townhouses and 4 Bedroom Villas",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2024/05/Community-Featured-Image-portrait-320x415.jpg",
    name: "Address Al Marjan Island, Ras Al Khaimah",
    desc: "New vision of luxury beachfront living Apartments, Townhouses and Sea Front-Homes",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2023/06/OASIS_320-x-415-320x415-1-320x415.jpg",
    name: "The Oasis",
    desc: "Immerse in Pure Luxury Villas and Mansions",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/DUBAI_MARINA_COMMUNITY-320x415.jpg",
    name: "Dubai Marina",
    desc: "A path-breaking waterfront project by Emaar",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/DHE_COMMUNITY_HERO-resize-scaled-1-320x415.jpeg",
    name: "Dubai Hills Estate",
    desc: "The green heart of Dubai",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/DUBAI_CREEK_HARBOUR_HERO-320x415.jpg",
    name: "Arabian Ranches III",
    desc: "Luxury waterfront residences with modern architecture and serene views.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/EMAAR_DubaiRanchesMP_CGI07_04-3-scaled-1-320x415.jpg",
    name: "The Valley",
    desc: "A serene community with family parks, sports facilities, and charming homes.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/EMAAR_DubaiValley_CGI03_resize-scaled-1-320x415.jpeg",
    name: "South Beach",
    desc: "Holiday homes with hotel-style service and beachfront access.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/AHD_BRAND_VIEW-FROM-ADDRESS-FOUNTAIN-VIEWS_AMBIENT_HR_01-resize-scaled-1-320x415.jpeg",
    name: "Emaar South",
    desc: "Golf course living close to the Expo 2020 site and Al Maktoum Airport.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/ES_View_13-scaled-1-320x415.jpg",
    name: "Dubai Hills Park",
    desc: "The largest residential park in Dubai offering endless leisure and outdoor fun.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/BENOY_DubaiHarbour_CGI12_02-resize-scaled-1-320x415.jpeg",
    name: "Dubai Hills Golf Club",
    desc: "Championship golf course community with elegant villas and scenic fairways.",
  },
  {
    img: "https://www.emaar.com/wp-content/uploads/2021/08/EMAAR_MinaRashid_CGI19_06-scaled-1-320x415.jpg",
    name: "Rosewater",
    desc: "Luxury waterfront residences with modern architecture and serene views.",
  },
];

export default function CommunitiesSection() {
  const swiperRef = useRef(null);

  return (
    <section className="communities-section container my-5">
      {/* Heading + Arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="text-secondary fw-semibold mb-2">COMMUNITIES</h5>
          <h2 className="fw-bold mt-2">FEATURED COMMUNITIES</h2>
        </div>

        {/* Custom Arrows */}
        <div className="nav-arrows d-flex gap-3">
          <button
            className="arrow-btn"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            ❮
          </button>
          <button
            className="arrow-btn"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            ❯
          </button>
        </div>
      </div>

      {/* Swiper Section */}
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
            <div className="community-card">
              <img
                src={community.img}
                alt={community.name}
                className="img-fluid community-img"
              />
              <div className="community-info text-center mt-3 px-2">
                <h5 className="fw-semibold text-dark">{community.name}</h5>
                <p className="text-muted small mb-0">{community.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

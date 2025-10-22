import React from "react";
import "./InfoCardsSection.css";

export function InfoCardsSection() {
  const cards = [
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2023/10/communities-vr-tour-thumb.jpg",
      title: "Communities 360° Tour",
      text: "Experience Dubai Hills Estate communities and amenities from the comfort of your home.",
    },
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2021/12/EMAAR_INTERNATIONAL-440x385.jpg",
      title: "International Projects",
      text: "Explore our portfolio of international projects.",
    },
    {
      image:
        "https://www.emaar.com/wp-content/uploads/2021/08/EMAAR_BLOG_HEADER_RESIZED-440x385.jpg",
      title: "Discover our Blogs",
      text: "Click to read our top tips and tricks for property management, home decoration and more.",
    },
  ];

  return (
    <section className="info-section container my-5">
      <div className="text-left mb-3">
        <h2 className="text-secondary">NEW</h2>
      </div>

      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="">
              <img
                src={card.image}
                alt={card.title}
                className="card-img-top img-fluid"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold mt-4">{card.title}</h5>
                <p className="card-text ">{card.text}</p>
                <button className="btn btn-dark mt-2">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

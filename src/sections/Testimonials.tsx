import { useEffect, useState, type CSSProperties } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    color: "#2b57d6",
    initials: "RS",
    quote:
      "Peace is one of the most dependable engineers I've worked with at Meezak. She takes ownership of features end to end, communicates clearly, and consistently ships clean, production-ready work.",
    name: "Rukayat Sodiq",
    company: "Meezak Technologies",
  },
  {
    color: "#ff4d8d",
    initials: "BI",
    quote:
      "As a learner and later as an instructor at Babtech, Peace showed real depth. She understands both the craft of building software and how to explain it in a way that helps others grow.",
    name: "Babatunde Olayemi Idris",
    company: "Founder, Babtech",
  },
  {
    color: "#141b34",
    initials: "PE",
    quote:
      "Peace helped bring Travel Inn's booking experience to life with careful attention to usability and performance. She is thoughtful, responsive, and easy to collaborate with across product decisions.",
    name: "Princess Enearu",
    company: "Founder, Travel Inn",
  },
  {
    color: "#e16118",
    initials: "KI",
    quote:
      "Working with Peace as a product engineer is smooth. She asks the right questions early, handles edge cases well, and delivers interfaces that feel intentional rather than rushed.",
    name: "Kelechukwu Ikechukwu",
    company: "Product Engineer",
  },
  {
    color: "#325334",
    initials: "DO",
    quote:
      "Peace writes code that other engineers can trust. Her implementations are structured, readable, and built with maintainability in mind - exactly what you want on a serious product team.",
    name: "David Olaleye",
    company: "Software Engineer",
  },
  {
    color: "#547056",
    initials: "EU",
    quote:
      "From a product perspective, Peace is a pleasure to work with. She translates requirements into practical solutions quickly, flags risks early, and stays focused on the user experience.",
    name: "Esther Ukanwa",
    company: "Product Manager",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => {
      setPageSize(media.matches ? 1 : 3);
      setPage(0);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const pageCount = Math.ceil(testimonials.length / pageSize);
  const canPrev = page > 0;
  const canNext = page < pageCount - 1;
  const visible = testimonials.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section id="testimonials" className="testimonials paper">
      <div className="section-head testimonials__head">
        <h2 className="h2">What People Say</h2>
        <p className="lead testimonials__lead">Feedback from people I've worked with on projects, teams, and digital products.</p>
      </div>

      <div className="testimonials__body">
        <div className="testimonials__row" key={`${pageSize}-${page}`}>
          {visible.map((t, i) => (
            <figure key={`${page}-${i}-${t.name}`} className="quote">
              <div className="quote__card" style={{ background: t.color }}>
                <blockquote className="quote__box">
                  <p className="body">{t.quote}</p>
                </blockquote>
                <figcaption className="quote__author">
                  <span className="quote__avatar" aria-hidden style={{ "--avatar-delay": `${i * 0.35}s` } as CSSProperties}>
                    <span className="quote__avatar-ring" />
                    <span className="quote__avatar-initials">{t.initials}</span>
                  </span>
                  <span className="quote__meta">
                    <span className="quote__name">{t.name}</span>
                    <span className="quote__company">{t.company}</span>
                  </span>
                </figcaption>
              </div>
              <span className="quote__squiggle" aria-hidden>
                <img src="/assets/squiggle.svg" alt="" />
              </span>
            </figure>
          ))}
        </div>

        <div className="testimonials__pager">
          <button
            type="button"
            className="pager__arrow pager__arrow--prev"
            aria-label="Previous testimonials"
            disabled={!canPrev}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
          <span className="pager__label">See more</span>
          <button
            type="button"
            className="pager__arrow pager__arrow--next"
            aria-label="Next testimonials"
            disabled={!canNext}
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

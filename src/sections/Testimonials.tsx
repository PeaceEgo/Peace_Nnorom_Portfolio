import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    color: "#2b57d6",
    quote:
      "Peace is a thoughtful developer who brings ideas to life with great attention to detail. She delivers quality work that makes her a valuable team member.",
    name: "Ogenetega Michael",
    company: "@ Selimate",
  },
  {
    color: "#ff4d8d",
    quote:
      "Working with Peace is seamless. She communicates clearly, anticipates edge cases early, and ships features that feel polished from the first release.",
    name: "Chiamaka Okoro",
    company: "@ Meezak",
  },
  {
    color: "#141b34",
    quote:
      "Peace turns complex requirements into clean, maintainable interfaces. Her frontend work consistently improves both usability and delivery speed.",
    name: "David Mensah",
    company: "@ Init Zero",
  },
  {
    color: "#e16118",
    quote:
      "She brings a calm, structured approach to every project. Peace is reliable under pressure and always focused on what will serve the end user best.",
    name: "Amina Yusuf",
    company: "@ Travel Inn",
  },
  {
    color: "#325334",
    quote:
      "Peace bridges design and engineering beautifully. She asks the right questions, implements carefully, and leaves the codebase better than she found it.",
    name: "Tunde Adebayo",
    company: "@ Flo Finance",
  },
  {
    color: "#547056",
    quote:
      "I trust Peace with production work. She owns her features end to end, follows through on feedback, and delivers results the team can depend on.",
    name: "Ngozi Eze",
    company: "@ Destiny Promoters",
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
                  <img className="quote__avatar" src="/assets/avatar.png" alt="" />
                  <span className="quote__name">{t.name}</span>
                  <span className="quote__divider" aria-hidden />
                  <span className="quote__company">{t.company}</span>
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

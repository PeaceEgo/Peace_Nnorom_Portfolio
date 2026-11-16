import { useEffect, useRef, useState, type CSSProperties } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => {
      setIsMobile(media.matches);
      setPage(0);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const pageSize = isMobile ? 1 : 3;
  const pageCount = Math.ceil(testimonials.length / pageSize);
  const canPrev = page > 0;
  const canNext = page < (isMobile ? testimonials.length - 1 : pageCount - 1);
  const visible = isMobile ? testimonials : testimonials.slice(page * pageSize, page * pageSize + pageSize);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(index, isMobile ? testimonials.length - 1 : pageCount - 1));
    setPage(next);
    if (!isMobile || !scrollerRef.current) return;
    const root = scrollerRef.current;
    const card = root.children[next] as HTMLElement | undefined;
    if (!card) return;
    const offset = card.getBoundingClientRect().left - root.getBoundingClientRect().left;
    root.scrollBy({ left: offset - parseFloat(getComputedStyle(root).paddingLeft), behavior: "smooth" });
  };

  useEffect(() => {
    if (!isMobile) return;
    const root = scrollerRef.current;
    if (!root) return;

    const onScroll = () => {
      const cards = Array.from(root.children) as HTMLElement[];
      if (!cards.length) return;
      const anchor = root.getBoundingClientRect().left + parseFloat(getComputedStyle(root).paddingLeft);
      let closest = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - anchor);
        if (dist < best) {
          best = dist;
          closest = i;
        }
      });
      setPage(closest);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section id="testimonials" className="testimonials paper">
      <div className="section-head testimonials__head">
        <h2 className="h2">What People Say</h2>
        <p className="lead testimonials__lead">Feedback from people I've worked with on projects, teams, and digital products.</p>
      </div>

      <div className="testimonials__body">
        <div
          className={`testimonials__row${isMobile ? " testimonials__row--swipe" : ""}`}
          ref={scrollerRef}
          key={isMobile ? "mobile" : `desktop-${page}`}
        >
          {visible.map((t, i) => (
            <figure key={t.name} className="quote">
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
            onClick={() => goTo(page - 1)}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
          <span className="pager__label">See more</span>
          <button
            type="button"
            className="pager__arrow pager__arrow--next"
            aria-label="Next testimonials"
            disabled={!canNext}
            onClick={() => goTo(page + 1)}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

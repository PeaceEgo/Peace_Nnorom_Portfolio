import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { mailto } from "../data/contact";
import "./Nav.css";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Testimonials", to: "/#testimonials" },
];

export default function Nav() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (to: string) => {
    const [path, anchor] = to.split("#");
    if (anchor) return pathname === path && hash === `#${anchor}`;
    if (path === "/") return pathname === "/" && !hash;
    return pathname.startsWith(path);
  };

  const links = navLinks.map((link) => {
    const active = isActive(link.to);
    return (
      <Link
        key={link.label}
        to={link.to}
        className={`nav__link ${active ? "is-active" : ""}`}
        aria-current={active ? "page" : undefined}
      >
        <span>{link.label}</span>
        {active && <img className="nav__scribble" src="/assets/nav-scribble.svg" alt="" width={99.848} height={18.414} />}
      </Link>
    );
  });

  return (
    <header className="nav paper">
      <Link className="nav__logo rough" to="/">
        Peace Nnorom
      </Link>

      <nav className="nav__links" aria-label="Main">
        {links}
      </nav>

      <Button className="nav__cta" href={mailto}>
        Let’s Talk
      </Button>

      <button
        type="button"
        className="nav__toggle"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="mobile-menu" className={`menu paper ${open ? "is-open" : ""}`} hidden={!open}>
        <div className="menu__top">
          <Link className="nav__logo rough" to="/">
            Peace Nnorom
          </Link>
          <button type="button" className="menu__close" aria-label="Close menu" onClick={() => setOpen(false)} />
        </div>
        <nav className="menu__links" aria-label="Mobile">
          {links}
        </nav>
        <Button href={mailto}>Let’s Talk</Button>
      </div>
      {open && <div className="menu__backdrop" onClick={() => setOpen(false)} aria-hidden />}
    </header>
  );
}

import { Link } from "react-router-dom";
import Button from "./Button";
import TornBand from "./TornBand";
import SocialLinks from "./SocialLinks";
import { navLinks } from "./Nav";
import { mailto } from "../data/contact";
import "./ContactFooter.css";

export default function ContactFooter() {
  return (
    <footer className="contact-footer paper">
      <div className="contact-wrap">
        <TornBand image="/assets/torn-contact.png" height={546} bleedY="3.66%" className="contact">
          <div className="contact__inner">
            <div className="contact__text">
              <h2 className="h2 contact__title">Let's Work Together</h2>
              <p className="lead contact__lead">
                Whether You Need A Marketing Website, Or Extra Engineering Support. Tell Me What You Are Working On.
              </p>
            </div>
            <Button href={mailto}>Let’s Talk</Button>
          </div>
        </TornBand>
        <img className="contact__flower contact__flower--top" src="/assets/flower-flat.svg" alt="" width={60} height={60} />
        <img className="contact__flower contact__flower--bottom" src="/assets/flower-flat.svg" alt="" width={60} height={60} />
      </div>

      <div className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name rough">Peace Nnorom</p>
            <p className="body">Full-Stack Developer building reliable, scalable web applications.</p>
          </div>

          <div className="footer__nav">
            {/* <p className="footer__nav-title">Navigations</p> */}
            <nav className="footer__links" aria-label="Footer">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <SocialLinks />
        </div>

        <img className="footer__rule" src="/assets/footer-rule.svg" alt="" />

        <p className="footer__legal">
          <span>© 2026 Peace Nnorom</span>
          <span className="footer__divider" aria-hidden />
          <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}

import { badgeSocials, linkedinUrl } from "../data/contact";
import "./SocialLinks.css";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`socials ${className}`}>
      <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="socials__link">
        <img src="/assets/social-linkedin.svg" alt="" width={72} height={72} />
      </a>
      {badgeSocials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="socials__link socials__link--badge"
        >
          <img className="socials__badge" src="/assets/social-star.svg" alt="" width={51.6732} height={52.6853} />
          <img className="socials__icon" src={social.icon} alt="" />
        </a>
      ))}
    </div>
  );
}

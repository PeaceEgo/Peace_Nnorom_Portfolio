import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "soft";
  icon?: "arrow" | "download" | "arrow-dark";
  to?: string;
  href?: string;
  download?: boolean;
  className?: string;
};

const icons = {
  arrow: "/assets/nav-arrow.svg",
  "arrow-dark": "/assets/case-arrow.svg",
  download: "/assets/icon-download.svg",
};

export default function Button({ children, variant = "primary", icon = "arrow", to, href, download, className = "" }: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <img className="btn__icon" src={icons[icon]} alt="" width={19.167} height={19.167} />
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  const external = href?.startsWith("http");

  return (
    <a
      className={classes}
      href={href ?? "#"}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

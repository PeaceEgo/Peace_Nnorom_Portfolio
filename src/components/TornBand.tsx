import type { CSSProperties, ReactNode } from "react";
import "./TornBand.css";

type TornBandProps = {
  image: string;
  height: number;
  /** Vertical overflow of the torn PNG beyond its frame, from the Figma export. */
  bleedY: string;
  offsetTop?: number;
  bandHeight?: number;
  className?: string;
  children: ReactNode;
};

export default function TornBand({ image, height, bleedY, offsetTop = 0, bandHeight, className, children }: TornBandProps) {
  const style = {
    "--band-height": `${height}px`,
    "--band-bleed-y": bleedY,
    "--band-top": `${offsetTop}px`,
    "--band-image-height": `${bandHeight ?? height}px`,
  } as CSSProperties;

  return (
    <section className={`torn-band ${className ?? ""}`} style={style}>
      <div className="torn-band__bg" aria-hidden>
        <img src={image} alt="" />
      </div>
      <div className="torn-band__content">{children}</div>
    </section>
  );
}

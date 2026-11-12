import "./TitleSpark.css";

/** Hand-drawn orange accent placed next to headings. */
export default function TitleSpark() {
  return (
    <span className="title-spark" aria-hidden>
      <span className="title-spark__inner">
        <span className="title-spark__bar" style={{ left: 0, top: 0 }} />
        <span className="title-spark__slot" style={{ left: 5.71, top: 2.86, width: 10.261, height: 9.375 }}>
          <span className="title-spark__bar title-spark__bar--rot" style={{ rotate: "49.03deg" }} />
        </span>
        <span className="title-spark__slot" style={{ left: 9.28, top: 11.42, width: 11.595, height: 6.199 }}>
          <span className="title-spark__bar title-spark__bar--rot" style={{ rotate: "70.32deg" }} />
        </span>
        <span className="title-spark__slot" style={{ left: 11.78, top: 21.78, width: 11.441, height: 2.592 }}>
          <span className="title-spark__bar title-spark__bar--rot" style={{ rotate: "90.47deg" }} />
        </span>
      </span>
    </span>
  );
}

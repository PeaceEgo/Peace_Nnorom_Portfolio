import "./Splat.css";

/** Insets (top right bottom left) of each paint-drop layer, from the Figma splat. */
const layers = [
  "3.53% 0.07% 0 7.63%",
  "71.75% 90% 18.03% 0",
  "34.49% 0 60.91% 94.76%",
  "85.06% 67.78% 10.8% 28.47%",
  "14.13% 36.71% 79.6% 59.44%",
  "0 15.43% 95.4% 81.15%",
  "26.2% 71.47% 68.73% 24.39%",
  "13.1% 56.95% 81.51% 40.82%",
  "19.76% 42.8% 75.47% 54.65%",
  "23.83% 92.34% 73.14% 4.15%",
  "69.86% 85.51% 27.27% 11.89%",
  "26.85% 87.47% 70.9% 10.63%",
  "81.66% 25.45% 16.24% 72.96%",
  "61.72% 93.69% 36.47% 4.82%",
  "5.17% 20.93% 92.84% 77.67%",
];

const suffixes = ["", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

type SplatProps = {
  color: "green" | "orange";
  number: number;
  /** Replaces the main blob (the Figma file uses a separate one for step 4). */
  mainBlob?: string;
};

export default function Splat({ color, number, mainBlob }: SplatProps) {
  const set = color === "green" ? "splat-1" : "splat-2";

  return (
    <div className="splat" aria-hidden>
      {layers.map((inset, i) => (
        <img
          key={inset}
          className="splat__layer"
          style={{ inset }}
          src={i === 0 && mainBlob ? mainBlob : `/assets/${set}${suffixes[i]}.svg`}
          alt=""
        />
      ))}
      <span className="splat__number">{number}</span>
    </div>
  );
}

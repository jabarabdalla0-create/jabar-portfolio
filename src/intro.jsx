import { useEffect, useState } from "react";
import "./Intro.css";

export default function Intro({ onComplete }) {
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const lines = ["Hello.", "I'm Jabar.", "Developer.", "From Kurdistan."];

  useEffect(() => {
    if (leaving) return;

    if (step >= lines.length) {
      const timer = setTimeout(() => {
        setLeaving(true);
      }, 900);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 1100);

    return () => clearTimeout(timer);
  }, [step, leaving]);

  useEffect(() => {
    if (!leaving) return;

    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [leaving, onComplete]);

  const skipIntro = () => {
    setLeaving(true);
  };

  return (
    <div className={`intro-screen ${leaving ? "intro-leaving" : ""}`}>
      <div className="intro-content">
        {lines.map((line, index) => (
          <h1 key={line} className={`intro-line ${index < step ? "show" : ""}`}>
            {line}
          </h1>
        ))}
      </div>

      <button className="intro-skip" onClick={skipIntro}>
        SKIP INTRO <span>→</span>
      </button>
    </div>
  );
}

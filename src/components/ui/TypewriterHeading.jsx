import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const TYPE_SPEED = 40; // ms per character

// Use "\n" inside `text` for line breaks, e.g. "Hafsah\nHaq"
// `startWhen` (default true) lets a parent gate when typing is allowed to begin,
// so one heading can wait for another to finish first.
function TypewriterHeading({
  text,
  as: Tag = "h2",
  className = "",
  startWhen = true,
  onDone,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [visibleChars, setVisibleChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || !startWhen) return;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleChars(i);
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onDone?.();
      }
    }, TYPE_SPEED);

    return () => clearInterval(interval);
  }, [isInView, startWhen, text, onDone]);

  const visibleText = text.slice(0, visibleChars);
  const lines = visibleText.split("\n");

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span
        className={`inline-block w-[3px] -mb-1 ml-1 h-[0.9em] bg-current ${
          done ? "animate-pulse" : ""
        }`}
        style={{ opacity: visibleChars === 0 ? 0 : 1 }}
      />
    </Tag>
  );
}

export default TypewriterHeading;
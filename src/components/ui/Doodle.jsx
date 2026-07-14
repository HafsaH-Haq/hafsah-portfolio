function Doodle({
  type = "star",
  className = "",
  color = "#2F4F46",
  size = 50,
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: color,
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="42" cy="42" r="22" />
          <line x1="58" y1="58" x2="82" y2="82" />
        </svg>
      );

    case "browser":
      return (
        <svg {...common}>
          <rect x="8" y="15" width="84" height="60" rx="6" />
          <line x1="8" y1="28" x2="92" y2="28" />
        </svg>
      );

    case "chat":
      return (
        <svg {...common}>
          <path d="M20 20 H80 V60 H50 L35 75 V60 H20 Z" />
        </svg>
      );

    case "wifi":
      return (
        <svg {...common}>
          <path d="M25 50 Q50 25 75 50" />
          <path d="M35 60 Q50 45 65 60" />
          <path d="M45 70 Q50 65 55 70" />
          <circle cx="50" cy="80" r="2" fill={color} stroke="none" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M20 80 Q40 30 80 30" />
          <path d="M72 22 L82 30 L72 38" />
        </svg>
      );

    case "star":
      return (
        <svg {...common}>
          <path d="M50 10 L56 42 L90 50 L56 58 L50 90 L44 58 L10 50 L44 42 Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default Doodle;
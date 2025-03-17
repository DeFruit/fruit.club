import { useState, useEffect } from "react";

const themes = [
  { name: "apple", imgPath: './apple-icon.svg' },
  { name: "grape", imgPath: './grape-icon.svg' },
  { name: "pinapple", imgPath: './pinapple-icon.svg' },
  { name: "strawberry", imgPath: './strawberry-icon.svg' },
];
interface ThemeSwitcherProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export default function ThemeSwitcher({ setTheme }: ThemeSwitcherProps) {
  const [activeTheme, setActiveTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "strawberry"
      : "strawberry"
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      setActiveTheme(
        document.documentElement.getAttribute("data-theme") || "strawberry"
      );
    }
  }, []);

  return (
    <div className="flex bg-transparent ">
      
      <div className="flex space-x-3">
        {themes.map((t) => (
          <button
            key={t.name}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
              activeTheme === t.name ? "border-black neon-glow" : "border-transparent"
            }`}
            style={{ backgroundColor: `var(--primary)` }}
            onClick={() => {
              setTheme(t.name);
              setActiveTheme(t.name);
            }}
          >
            <img src={t.imgPath} alt={t.name} className="w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
}
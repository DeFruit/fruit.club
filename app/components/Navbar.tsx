import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "apple"
      : "apple"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.nav
      className="w-full bg-background text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <h1 className="text-4xl font-bold">FRUIT.CLUB</h1>
        <ThemeSwitcher setTheme={setTheme} />
        
      </div>
    </motion.nav>
  );
}

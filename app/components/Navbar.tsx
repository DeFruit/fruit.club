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
      className="fixed top-0 w-full bg-background text-white py-4 px-6 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-4xl font-bold">FRUIT.CLUB</h1>
        <ThemeSwitcher setTheme={setTheme} />
        <motion.button
          className="fruit-button bg-primary neon-glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          onClick={() => window.open("https://x.com/fruitclubalgo", "_blank")}
        >
          Follow us on X!
        </motion.button>
      </div>
    </motion.nav>
  );
}

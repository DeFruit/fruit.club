import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="w-full bg-background text-white py-4 px-6 flex flex-col md:flex-row items-center justify-start"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl  flex flex-col md:flex-row items-center justify-start gap-3">
        <h1 className="text-4xl font-bold">FRUITCLUB</h1>
        
      </div>
    </motion.nav>
  );
}

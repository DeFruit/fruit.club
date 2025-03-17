import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen pl-8 md:pl-16 lg:pl-24">
      {/* Left Side: Text Content */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Welcome to <span className="text-text">Fruit Club</span>!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg lg:text-xl text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          The most fun and vibrant DeFi experience. Stake, play, and earn with
          your favorite fruits! 🍏🍍🍇🍓
        </motion.p>
        <div className="flex gap-4">
          <motion.button
            className="fruit-button bg-primary neon-glow mt-6 text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            Join the Fun!
          </motion.button>
          <motion.button
            className="fruit-button bg-white text-primary mt-6 text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            Read the whitepaper
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side: Hero Image */}
      <motion.div
        className="md:w-1/2 flex justify-center "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="./hero image.svg"
          alt="Massive Fruit Mound"
          className="w-full h-auto max-w-[540px] md:max-w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

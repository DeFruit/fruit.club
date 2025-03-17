import { motion } from "framer-motion";

export default function JuiceToken() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 text-center ">
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Introducing <span className="text-primary">JUICE</span>! 🥤
      </motion.h2>
      <p className="mt-4 text-lg lg:text-xl text-secondary">
        The reward for squeezing, competing, and dominating Fruit Club!
      </p>

      {/* JUICE Token Info */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="./juice-token.svg"
            alt="JUICE Token"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          className="w-full md:w-2/3 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-text">Why JUICE Matters? 💰</h3>
          <p className="mt-2 text-lg text-secondary">
            JUICE is the core currency of Fruit Club. Earn it by squeezing fruits, 
            competing in events, and dominating the leaderboard. Use JUICE to unlock 
            rewards, boost your power, and flex on the competition! 
          </p>
          <motion.button
            className="fruit-button bg-primary neon-glow mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Earning JUICE!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

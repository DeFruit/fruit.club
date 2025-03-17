import { motion } from "framer-motion";
import { Droplet, Sword, Zap } from "lucide-react";

const steps = [
  {
    title: "Squeeze Fruits",
    description: "Squeez your fruits daily and contribute to your team",
    icon: <Droplet className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Beat Out the Competition",
    description: "Compete against others to maximize your $JUICE earnings.",
    icon: <Sword className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Earn Juice",
    description: "$JUICE is your reward! Use it to power up and win even more.",
    icon: <Zap className="w-12 h-12 text-secondary" />,
  },
];

export default function GameLoop() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 text-center">
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Fruit Club Loop 🍏🍌🍇🍓
      </motion.h2>
      <p className="mt-4 text-lg lg:text-xl text-secondary">
        Squeeze fruits, compete, and earn sweet rewards!  
      </p>

      {/* Steps Container */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 bg-background rounded-xl shadow-lg w-full md:w-1/3 text-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold text-text">{step.title}</h3>
            <p className="text-secondary mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

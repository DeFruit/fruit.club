import { motion } from "framer-motion";
import { Rocket, Code, DollarSign } from "lucide-react";

const features = [
  { title: "Fast Performance", icon: Rocket, desc: "Instant finality and < 3 second blocktimes! 🤯" },
  { title: "Low fees", icon: DollarSign, desc: "Less than $0.001 per transaction" },
  { title: "No downtime", icon: Code, desc: "No downtime, no maintenance, just fun!" },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Only on Algorand</h2>
        <p className=" mb-10">The only blockchain that can handle all the fun!</p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-background rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-text" />
              <h3 className="text-2xl font-semibold text-text">{feature.title}</h3>
              <p className="text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

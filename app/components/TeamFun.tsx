import { motion } from "framer-motion";

const teams = [
  { title: "Gorgeous Grapes", imgSrc: './grape-icon.svg', bgColor: 'bg-grapeBG' },
  { title: "Ascending Apples", imgSrc: './apple-icon.svg', bgColor: 'bg-appleBG' },
  { title: "Perfect Pinapples", imgSrc: './pinapple-icon.svg', bgColor: 'bg-pinappleBG' },
  { title: "Smooth Strawberries", imgSrc: './strawberry-icon.svg', bgColor: 'bg-strawberryBG' },
];

export default function TeamFun() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join a team!</h2>
        <p className="text-gray-300 mb-10">Play, Stake and earn with your teammates.</p>
        <div className="grid md:grid-cols-4 gap-8 mx-3">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg text-center ${team.bgColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={team.imgSrc} alt={team.title} className="h-24 w-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-text">{team.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

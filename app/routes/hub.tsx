import { motion } from "framer-motion";
import { useContext } from "react";
import { WalletContext } from "~/context/walletContext";
import Navbar from "~/components/Navbar";
export default function Hub() {
  const { setDisplayWalletConnectModal } = useContext(WalletContext);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-text mb-8">Fruit Club Hub</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-secondary p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-text mb-4">Staking</h2>
              <p className="text-text/80">Stake your fruits and earn juicy rewards!</p>
            </motion.div>

            <motion.div 
              className="bg-secondary p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-text mb-4">Games</h2>
              <p className="text-text/80">Play fun fruit-themed games and win prizes!</p>
            </motion.div>

            <motion.div 
              className="bg-secondary p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-text mb-4">Stats</h2>
              <p className="text-text/80">View your fruit farming statistics.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

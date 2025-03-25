import { motion } from 'framer-motion'
import React from 'react'

interface ControlButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        backgroundColor: '#FF6347', // Tomato color for hover
        borderColor: '#FFD700', // Gold color for contrast
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-6 py-4 font-bold text-text text-2xl rounded-lg transition-transform duration-200 ease-in-out bg-secondary backdrop-blur-md bg-opacity-90 border-1 border-white/30 shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-lg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default ControlButton

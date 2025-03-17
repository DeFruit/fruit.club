import { motion } from 'framer-motion'
import React from 'react'

interface AnimButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const AnimButton: React.FC<AnimButtonProps> = ({ onClick, children }) => {
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
      className=" px-6 py-4 font-bold text-white rounded-lg transition-transform duration-200 ease-in-out bg-secondary"
    >
      {children}
    </motion.button>
  )
}

export default AnimButton

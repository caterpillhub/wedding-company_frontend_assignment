"use client"

import { motion } from "framer-motion"

interface QuizOptionProps {
  text: string
  isSelected: boolean
  onClick: () => void
  delay?: number
}

export default function QuizOption({ text, isSelected, onClick, delay = 0 }: QuizOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        w-full p-5 rounded-xl font-medium text-lg transition-all duration-200
        ${
          isSelected
            ? "bg-cyan-200/80 text-gray-800 border-2 border-cyan-300 shadow-md"
            : "bg-gray-50/80 text-gray-800 border-2 border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/50"
        }
      `}
    >
      {text}
    </motion.button>
  )
}

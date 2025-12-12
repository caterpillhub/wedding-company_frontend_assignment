"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ResultsScreenProps {
  score: number
  onRestart?: () => void
}

export default function ResultsScreen({ score, onRestart }: ResultsScreenProps) {
  const [displayScore, setDisplayScore] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const increment = score / 30
      const interval = setInterval(() => {
        current += increment
        if (current >= score) {
          setDisplayScore(score)
          clearInterval(interval)
        } else {
          setDisplayScore(Math.floor(current))
        }
      }, 30)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [score])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-white px-6 py-2 rounded-full shadow-md mb-8"
        >
          <p className="text-gray-700 font-medium">Keep Learning!</p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2B6B8C] mb-6 italic"
        >
          Your Final score is
        </motion.h1>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="mb-12"
        >
          <div className="text-[120px] sm:text-[180px] md:text-[220px] font-serif font-bold text-[#2B6B8C] leading-none">
            {displayScore}
            {score > 0 && <span className="text-[80px] sm:text-[120px] md:text-[140px]">%</span>}
          </div>
        </motion.div>

        {/* Restart button */}
        {onRestart && score > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="bg-cyan-100 hover:bg-cyan-200 text-gray-800 font-medium px-8 py-3 rounded-xl transition-colors"
          >
            Start Again
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

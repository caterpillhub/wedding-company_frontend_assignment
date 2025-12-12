"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: index < currentStep ? "100%" : "0%",
            }}
            transition={{ duration: 0.3 }}
            className="h-full bg-[#2B6B8C] rounded-full"
          />
        </motion.div>
      ))}
    </div>
  )
}

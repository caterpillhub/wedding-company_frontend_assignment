"use client"

import { motion } from "framer-motion"

interface OptionShowcaseProps {
  label: string
  variant?: "default" | "light" | "medium" | "selected"
}

export default function OptionShowcase({ label, variant = "default" }: OptionShowcaseProps) {
  const variants = {
    default: "bg-gray-50 border-gray-200",
    light: "bg-cyan-100/40 border-cyan-200/50",
    medium: "bg-cyan-200/60 border-cyan-300",
    selected: "bg-cyan-200 border-cyan-300",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        p-5 rounded-xl border-2 text-center font-semibold text-lg text-gray-800
        ${variants[variant]}
      `}
    >
      {label}
    </motion.div>
  )
}

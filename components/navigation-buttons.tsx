"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  showPrevious?: boolean
  nextLabel?: string
  disabled?: boolean
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  showPrevious = true,
  nextLabel = "Next",
  disabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-end gap-3 mt-6">
      {showPrevious && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          className="p-3 rounded-xl bg-cyan-100 hover:bg-cyan-200 text-gray-700 transition-colors"
          aria-label="Previous question"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      )}

      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        onClick={onNext}
        disabled={disabled}
        className={`px-6 py-3 rounded-xl font-medium transition-colors ${
          disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-cyan-100 hover:bg-cyan-200 text-gray-700"
        } ${nextLabel === "Submit" ? "min-w-[120px]" : "p-3"}`}
      >
        {nextLabel === "Submit" ? nextLabel : <ChevronRight className="w-5 h-5" />}
      </motion.button>
    </div>
  )
}

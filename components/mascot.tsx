"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Mascot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 90 }}
      className="relative pointer-events-none"
    >
      {/* Speech Bubble - MOVE FURTHER LEFT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55 }}
        className="absolute -top-20 -left-25" 
      >
        <Image
          src="/images/speech-bubble.png"
          alt="Best of Luck"
          width={165}
          height={85}
          className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] opacity-[0.98]"
        />
      </motion.div>

      {/* Cat Paw - MOVE FURTHER RIGHT */}
      <motion.div
        animate={{
          rotate: [0, -6, 6, -6, 0],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          repeatDelay: 1.8,
          ease: "easeInOut",
        }}
        className="relative"
        style={{
          transform: "translateX(45px) translateY(15px)",
        }}
      >
        <Image
          src="/images/cat-paw.png"
          alt="Cat Paw"
          width={115}
          height={115}
          className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.18)] opacity-[0.99]"
        />
      </motion.div>
    </motion.div>
  )
}

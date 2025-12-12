"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Mascot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="absolute bottom-0 left-0 z-20"
    >
      <div className="relative">
        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-2 left-8"
        >
          <Image
            src="/images/speech-bubble.png"
            alt="Best of Luck"
            width={120}
            height={60}
            className="w-28 h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Cat paw with subtle wave animation */}
        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/images/cat-paw.png"
            alt="Cat Paw"
            width={140}
            height={140}
            className="w-36 h-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

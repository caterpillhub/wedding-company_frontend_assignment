"use client"

import { motion } from "framer-motion"
import ProgressBar from "./progress-bar"
import QuizOption from "./quiz-option"
import NavigationButtons from "./navigation-buttons"
import Mascot from "./mascot"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

interface QuizQuestionProps {
  question: Question
  totalQuestions: number
  currentQuestionIndex: number
  selectedAnswer?: string
  onSelectAnswer: (answer: string) => void
  onNext: () => void
  onPrevious: () => void
  onSubmit: () => void
  showMascot?: boolean
}

export default function QuizQuestion({
  question,
  totalQuestions,
  currentQuestionIndex,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
  onSubmit,
  showMascot = false,
}: QuizQuestionProps) {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-cyan-300 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-300/20 rounded-full blur-3xl" />
      </div>

      {/* Outer card (blue/cyan background) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-5xl bg-cyan-100/40 backdrop-blur-sm rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.1)] p-8 overflow-visible"
      >
        {/* Inner card (white content card) - centered with padding from outer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-serif text-[#2B6B8C] mb-3 italic"
            >
              Test Your Knowledge
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Answer all questions to see your results
            </motion.p>
          </div>

          {/* Progress Bar */}
          <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={totalQuestions} />

          {/* Question */}
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="mb-6"
          >
            <div className="bg-cyan-100/60 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                {question.id}. {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <QuizOption
                  key={index}
                  text={option}
                  isSelected={selectedAnswer === option}
                  onClick={() => onSelectAnswer(option)}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <NavigationButtons
            onPrevious={onPrevious}
            onNext={isLastQuestion ? onSubmit : onNext}
            showPrevious={currentQuestionIndex > 0}
            nextLabel={isLastQuestion ? "Submit" : undefined}
            disabled={!selectedAnswer}
          />
        </motion.div>

        {showMascot && <Mascot />}
      </motion.div>
    </div>
  )
}

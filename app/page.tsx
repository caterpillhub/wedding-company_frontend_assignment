"use client"

import { useState } from "react"
import QuizQuestion from "@/components/quiz-question"
import ResultsScreen from "@/components/results-screen"

const quizData = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow",
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream",
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: "Infinite",
  },
]

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
  }

  const calculateScore = () => {
    let correct = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / quizData.length) * 100)
  }

  if (showResults) {
    return <ResultsScreen score={calculateScore()} onRestart={handleRestart} />
  }

  return (
    <QuizQuestion
      question={quizData[currentQuestion]}
      totalQuestions={quizData.length}
      currentQuestionIndex={currentQuestion}
      selectedAnswer={selectedAnswers[currentQuestion]}
      onSelectAnswer={handleAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
      showMascot={currentQuestion === 0}
    />
  )
}

import { useState, type ReactNode } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Confetti from 'react-confetti'
import { questions, type Answer } from './quizData'
import './App.css'
import { StartScreen } from './components/StartScreen'
import { QuizScreen } from './components/QuizScreen'
import { ResultScreen } from './components/ResultScreen'
import { AnswerCommentScreen } from './components/AnswerCommentScreen'

type View = 'start' | 'quiz' | 'comment' | 'success' | 'fail'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#0b1a33',
      paper: 'rgba(10, 22, 50, 0.9)',
    },
  },
  typography: {
    fontFamily: "'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
})

function AppInner() {
  const [view, setView] = useState<View>('start')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [confettiPieces, setConfettiPieces] = useState(0)
  const [confettiKey, setConfettiKey] = useState(0)
  const [highlightedAnswerId, setHighlightedAnswerId] = useState<string | null>(null)
  const [isAdvancing, setIsAdvancing] = useState(false)
  const [answerComment, setAnswerComment] = useState<string | null>(null)

  const goToNextStep = () => {
    const isLast = currentIndex === questions.length - 1
    if (isLast) {
      setView('success')
    } else {
      setCurrentIndex((idx) => idx + 1)
      setView('quiz')
    }
    setHighlightedAnswerId(null)
    setIsAdvancing(false)
    setAnswerComment(null)
  }

  const startQuiz = () => {
    setCurrentIndex(0)
    setView('quiz')
  }

  const handleAnswer = (answer: Answer) => {
    if (isAdvancing) return

    if (!answer.isCorrect) {
      setView('fail')
      return
    }

    // trigger a confetti burst and highlight on every correct answer
    setConfettiPieces(0) // reset first to force a new burst
    setConfettiKey((k) => k + 1)
    setConfettiPieces(100)
    setHighlightedAnswerId(answer.id)
    setIsAdvancing(true)

    if (answer.comment) {
      // show comment + wait for user to press OK
      setAnswerComment(answer.comment)
      setView('comment')
    } else {
      // no comment → just confetti, then immediately go to next question
      setAnswerComment(null)
      goToNextStep()
    }
  }

  const restart = () => {
    setCurrentIndex(0)
    setView('start')
    setConfettiPieces(0)
    setConfettiKey((k) => k + 1)
    setHighlightedAnswerId(null)
    setAnswerComment(null)
    setIsAdvancing(false)
  }

  let content: ReactNode = null

  switch (view) {
    case 'start':
      content = <StartScreen onStart={startQuiz} />
      break
    case 'quiz':
      content = (
        <QuizScreen
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          total={questions.length}
          isAdvancing={isAdvancing}
          highlightedAnswerId={highlightedAnswerId}
          onAnswer={handleAnswer}
        />
      )
      break
    case 'comment':
      content =
        answerComment !== null ? (
          <AnswerCommentScreen
            comment={answerComment}
            currentIndex={currentIndex}
            onOk={goToNextStep}
          />
        ) : null
      break
    case 'fail':
      content = <ResultScreen variant="fail" onRestart={restart} />
      break
    case 'success':
      content = <ResultScreen variant="success" onRestart={restart} />
      break
    default:
      content = null
  }

  return (
    <>
      <Confetti key={confettiKey} numberOfPieces={confettiPieces} recycle={false} />
      {content}
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppInner />
    </ThemeProvider>
  )
}

export default App

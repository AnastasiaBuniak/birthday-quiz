import { Box, Button, Typography } from '@mui/material'
import type { Answer, Question } from '../quizData'

type Props = {
  question: Question
  currentIndex: number
  total: number
  isAdvancing: boolean
  highlightedAnswerId: string | null
  onAnswer: (answer: Answer) => void
}

export function QuizScreen({
  question,
  currentIndex,
  total,
  isAdvancing,
  highlightedAnswerId,
  onAnswer,
}: Props) {
  return (
    <Box
      className="screen screen--quiz"
      sx={{
        bgcolor: 'primary.dark',
        backgroundImage: `linear-gradient(rgba(5, 10, 30, 0.75), rgba(5, 10, 30, 0.9)), url(${question.bg})`,
      }}
    >
      <Box className="screen__overlay">
        <Box
          className="question"
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 6,
            p: { xs: 3, md: 4 },
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            {question.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 3, opacity: 0.8 }}
          >{`Question ${currentIndex + 1} of ${total}`}</Typography>

          <Box className="answers">
            {question.answers.map((answer) => (
              <Button
                key={answer.id}
                onClick={() => onAnswer(answer)}
                sx={{
                  textAlign: 'left',
                  p: 0,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
                disabled={isAdvancing}
              >
                <Box
                  className={`answer${
                    highlightedAnswerId === answer.id ? ' answer--highlight' : ''
                  }`}
                  sx={{
                    width: '100%',
                    minHeight: { xs: 180, md: 220 },
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    p: 2.5,
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${answer.bg})`,
                  }}
                >
                  <Typography
                    variant="h6"
                    className="answer__label"
                    sx={{ color: '#fff' }}
                  >
                    {answer.title}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


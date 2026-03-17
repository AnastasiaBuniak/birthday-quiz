import { Box, Button, Paper, Typography } from '@mui/material'
import { questions } from '../quizData'

const PROGRESS_BAR_ENABLED = true

type Props = {
  comment: string
  currentIndex: number
  onOk: () => void
}

export function AnswerCommentScreen({ comment, currentIndex, onOk }: Props) {
  const total = questions.length
  const percent = Math.round(((currentIndex + 1) / total) * 100)

  return (
    <Box
      className="screen"
      sx={{
        bgcolor: 'rgba(4, 9, 20, 0.9)',
        color: 'primary.contrastText',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 420,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            px: 3,
            py: 3,
            borderRadius: 3,
            bgcolor: 'background.paper',
            textAlign: 'center',
            border: '2px solid #4caf50',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #fff9c4, #ffb300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
              mb: 0.5,
            }}
          >
            <Typography variant="h4" component="span">
              ✨
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Correct answer!
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {comment}
          </Typography>
          {PROGRESS_BAR_ENABLED && (
            <Box
              sx={{
                mt: 1,
                width: '100%',
                textAlign: 'left',
              }}
            >
              <Typography
                variant="caption"
                sx={{ display: 'block', mb: 0.5, opacity: 0.8 }}
              >
                {`Question ${currentIndex + 1} of ${total}`}
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: 8,
                  borderRadius: 999,
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: `${percent}%`,
                    background: 'linear-gradient(90deg, #4caf50, #81c784, #c8e6c9)',
                  }}
                />
              </Box>
              <Typography
                variant="caption"
                sx={{ display: 'block', textAlign: 'right', opacity: 0.9 }}
              >
                {`${percent}% complete`}
              </Typography>
            </Box>
          )}
          <Button size="small" variant="contained" color="success" onClick={onOk}>
            OK
          </Button>
        </Paper>
      </Box>
    </Box>
  )
}


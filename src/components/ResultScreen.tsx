import { Box, Button, Typography } from '@mui/material'

type Props = {
  variant: 'fail' | 'success'
  onRestart: () => void
}

export function ResultScreen({ variant, onRestart }: Props) {
  const isSuccess = variant === 'success'

  return (
    <Box
      className="screen"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Box maxWidth={480}>
        <Typography variant="h3" component="h1" gutterBottom>
          {isSuccess ? 'You got it!' : 'Not quite right'}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          {isSuccess
            ? 'All answers were correct. Time to celebrate the birthday!'
            : 'One of the answers was wrong. Try again and see if you can get them all!'}
        </Typography>
        <Button variant="outlined" color="inherit" onClick={onRestart}>
          {isSuccess ? 'Play again' : 'Back to start'}
        </Button>
      </Box>
    </Box>
  )
}


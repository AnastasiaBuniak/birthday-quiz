import { Box, Button, Typography } from '@mui/material'

type Props = {
  onStart: () => void
}

export function StartScreen({ onStart }: Props) {
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
        <Typography variant="h2" component="h1" gutterBottom>
          Birthday Quiz
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Answer all questions correctly to unlock the birthday surprise.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={onStart}
        >
          Start
        </Button>
      </Box>
    </Box>
  )
}


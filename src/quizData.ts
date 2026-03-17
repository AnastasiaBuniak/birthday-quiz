export type Answer = {
  id: string
  title: string
  bg: string
  isCorrect: boolean
  comment?: string
}

export type Question = {
  id: string
  title: string
  bg: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 'q1',
    title: 'Whose birthday are we celebrating today?',
    bg: '/images/questions/q1-bg.jpg',
    answers: [
      {
        id: 'a',
        title: 'Anastasia',
        bg: '/images/answers/q1-a-bg.jpg',
        isCorrect: true,
        comment: 'Of course, it is Anastasia’s special day!',
      },
      {
        id: 'b',
        title: 'Someone else',
        bg: '/images/answers/q1-b-bg.jpg',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'q2',
    title: 'Where is the birthday taking place?',
    bg: '/images/questions/q2-bg.jpg',
    answers: [
      {
        id: 'a',
        title: 'At a cozy home',
        bg: '/images/answers/q2-a-bg.jpg',
        isCorrect: true,
        comment: 'A warm, cozy home is the perfect place to celebrate.',
      },
      {
        id: 'b',
        title: 'On another planet',
        bg: '/images/answers/q2-b-bg.jpg',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'q3',
    title: 'What is on the birthday cake?',
    bg: '/images/questions/q3-bg.jpg',
    answers: [
      {
        id: 'a',
        title: 'Lots of candles and sparkles',
        bg: '/images/answers/q3-a-bg.jpg',
        isCorrect: true,
        comment: 'Yes! The more candles and sparkles, the better the wish.',
      },
      {
        id: 'b',
        title: 'Only a single plain candle',
        bg: '/images/answers/q3-b-bg.jpg',
        isCorrect: false,
      },
    ],
  },
]


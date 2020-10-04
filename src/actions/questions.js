export const FETCH_QUIZZ = 'FETCH_QUIZZ';
export const SAVE_QUIZZ = 'SAVE_QUIZZ';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

// Actions creator
export const fetchQuizz = () => ({
  type: FETCH_QUIZZ,
});
export const saveQuizz = (quizz) => ({
  type: SAVE_QUIZZ,
  quizz,
});

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
});
export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

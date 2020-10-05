export const FETCH_QUIZZ = 'FETCH_QUIZZ';
export const SAVE_QUIZZ = 'SAVE_QUIZZ';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

export const INITIALIZE_QUIZ = 'INITIALIZE_QUIZ';
export const INITIALIZE_ANSWERS = 'INITIALIZE_ANSWERS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';

export const HANDLE_SHOW_BUTTON = 'HANDLE_SHOW_BUTTON';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const INCREASE_QUESTION_INDEX = 'INCREASE_QUESTION_INDEX';

// Actions creator
export const fetchQuizz = () => ({
  type: FETCH_QUIZZ,
});
export const saveQuizz = (quizzList) => ({
  type: SAVE_QUIZZ,
  quizzList,
});

export const fetchQuestions = (id) => ({
  type: FETCH_QUESTIONS,
  id,
});
export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});

export const initializeQuiz = () => ({
  type: INITIALIZE_QUIZ,
});
export const initializeAnswers = () => ({
  type: INITIALIZE_ANSWERS,
});

export const handleShowButton = (display) => ({
  type: HANDLE_SHOW_BUTTON,
  display,
});
export const increaseScore = () => ({
  type: INCREASE_SCORE,
});
export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const updateQuestion = () => ({
  type: UPDATE_QUESTION,
});

export const updateAnswers = () => ({
  type: UPDATE_ANSWERS,
});

export const increaseQuestionIndex = () => ({
  type: INCREASE_QUESTION_INDEX,
});

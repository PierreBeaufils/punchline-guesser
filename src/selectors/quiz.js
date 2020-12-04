const getQuizById = (quizz, id) => quizz.find((quiz) => quiz.id === parseInt(id, 10));

export default getQuizById;

import React, { useState, useEffect } from 'react';
import Answers from 'src/components/Answers';
import axios from 'axios';

const Quiz = () => {
  const [quizz, setQuizz] = useState();
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [qIndex, setQuestionIndex] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const uri = 'http://localhost:3000/quiz/2';

  const updateDatas = (index) => {
    setQuestion(quizz[index]);
    setAnswers([quizz[index].answers[0], quizz[index].answers[1], quizz[index].answers[2], quizz[index].answers[3]]);
    setGoodAnswer(quizz[index].answer_id);
    setQuestionIndex(qIndex + 1);
  };

  const loadQuiz = () => {
    axios.get(uri)
      .then((response) => {
        setQuizz(response.data);
        setQuizLength(response.data.length);
        updateDatas(qIndex);
        setLoading(false);
      })
      .catch((error) => {
        console.trace(error);
      });
  };

  useEffect(() => {
    loadQuiz();
    console.log('component mounted');
  }, []);

  const nextQuestion = () => {
    if (qIndex === quizLength) {
      console.log('fin du quiz');
    }
    else {
      updateDatas(qIndex);
      setShowButton(false);
      setIsAnswered(false);
    }
  };

  const handleShowButton = () => {
    setShowButton(true);
    setIsAnswered(true);
  };

  const handleIncreaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="container">
      {!isLoading && (
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              <h4>Question {qIndex}/{quizLength}</h4>
              <p>{question}</p>
            </div>
            <Answers
              answers={answers}
              goodAnswerId={goodAnswer}
              showButton={handleShowButton}
              isAnswered={isAnswered}
              increaseScore={handleIncreaseScore}
            />
            <div id="submit">
              {showButton ? <button type="button" className="fancy-btn" onClick={nextQuestion}>{qIndex === quizLength ? 'Finish quiz' : 'Next question'}</button> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

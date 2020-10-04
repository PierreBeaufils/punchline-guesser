import React, { useState, useEffect } from "react";
import Answers from "src/components/Answers";
import axios from "axios";

const Quiz = () => {
  const [quizz, setQuizz] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [qIndex, setQuestionIndex] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const uri = "http://localhost:3000/quiz/2";

  const updateDatas = () => {
    console.log(quizz);
    setQuestion(quizz[qIndex].question);
    setAnswers([
      quizz[qIndex].answers[0],
      quizz[qIndex].answers[1],
      quizz[qIndex].answers[2],
      quizz[qIndex].answers[3],
    ]);
    setGoodAnswer(quizz[qIndex].answer_id);
    setQuestionIndex(qIndex + 1);
  };

  useEffect(() => {
    const loadQuiz = () => {
      axios.get(uri).then((response) => {
        setQuizz(response.data);
        setQuizLength(response.data.length);
        setLoading(false);
        console.log(response);
      });
    };

    loadQuiz();
  }, []);

  const nextQuestion = () => {
    if (qIndex === quizLength) {
      console.log("fin du quiz");
    } else {
      updateDatas();
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
              <h4>
                Question {qIndex}/{quizLength}
              </h4>
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
              {showButton ? (
                <button
                  type="button"
                  className="fancy-btn"
                  onClick={nextQuestion}
                >
                  {qIndex === quizLength ? "Finish quiz" : "Next question"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

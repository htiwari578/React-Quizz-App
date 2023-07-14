import React, {useState,useEffect} from 'react';
import './quiz.css';



const questions = [
    {
        question: "What is JSX in React JS??",
        options: ["A syntax extension for JavaScript",
        "A programming language",
        "A data structure in React","A database management system"],
        correctAnswer: "A syntax extension for JavaScript"
    },

    {
        question: "What is the virtual DOM in React JS?",
        options: [" A tool for managing database operations","A tool for optimizing CSS","A tool for optimizing JavaScript code"
         ,  "A representation of the actual DOM in memory" ],
        correctAnswer: "A representation of the actual DOM in memory"
    },
    {
        question: "Which of the following is used in React.js to increase performance?",
        options: ["Virtual DOM", "Original DOM","Both A & B"],
        correctAnswer: "Virtual DOM"

        
    },
]
const QuizShow = () => {

    const [score ,setScore] = useState(0);
    const  [showScore ,setShowScore] = useState(false);

    const [showText , setShowText] = useState(false);
    const [currentQstn , setCurrentQstn] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);


    useEffect(() => {
        if (timeLeft === 0) {
            //if times run out ,submit an empty answer
          handleAnswerOpt('');
        }
    
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);
    
      const handleAnswerOpt = (selectedAns) => {
        // Clear the timer when an answer is selected
        clearTimeout(); 
        if (selectedAns === questions[currentQstn].correctAnswer) {
          setScore(score + 1);
        }
    
        const nextQstn = currentQstn + 1;
        if (nextQstn < questions.length) {
          setCurrentQstn(nextQstn);
          // Reset the timer for the next question
          setTimeLeft(10); 
        } else {
          setShowScore(true);
          setShowText(true);
        }
      };
      const progress = ((currentQstn + 1) / questions.length) * 100;


  return (
    <React.Fragment>
    <h1>Quiz App</h1>
    <div className ="quiz-app">
        
        {showScore ? (<div className= "score-sec"> You Scored {score} out of {questions.length}👍
        {showText && (
            <h2>Thank you for completing the quiz!✨</h2>
        )}
        </div>
        ): (
       
        <React.Fragment>
            <div className = "question-section">
                <div className="qst-count">
                    <span> Question {currentQstn + 1}</span> / {questions.length}


                </div>
                <div className="qstn-text">{questions[currentQstn].question}</div>
                <div className= "timer">Time Left : {timeLeft} seconds</div>
                <div className ="progress-bar" style={{width : `${progress}%`}}></div>
            </div>
            <div className="ans-section">{questions[currentQstn].options.map((opt)=>(
                <button className = "answer-button" key ={opt} onClick={()=> handleAnswerOpt(opt)}
                >{opt}</button>
            ))}</div>
        </React.Fragment>
        )}
    

    </div>
    </React.Fragment>
    
    
  );
}

export default QuizShow;
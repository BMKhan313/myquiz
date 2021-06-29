import React, { useState } from 'react'
import QuestionsBank from './QuestionsBank';
import Questions from './QuestionsBank';
import opts from './QuestionsBank';

const Quiz = () => {

    const [currQuestion, setCurrQuestion] = useState(0);
    let [score, setSccore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    const nextQuestion = () => {

        setCurrQuestion(currQuestion + 1);

    }

    const handleCorrectAns = (isCorrect) => {
        const nextQuestion = currQuestion + 1;
        setCurrQuestion(nextQuestion);

        if (nextQuestion < Questions.length) {
            setCurrQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

        if (isCorrect) {
            // alert('the answer is correct!');
            setSccore(score + 1);

        } else {
            // alert("Wrong answer");
        }

    }


    return (
        
        <div>
        <div className="Quiz"><h1>Quiz</h1></div>   
            <div className="App" >
            
                {showScore ? 
            
            <div className='score-section'>
            <h2>your score is {score} / {Questions.length}</h2>
        </div> 
        :
        
        <div className="Menu">
            
                    <div className="marks">Marks:{score}</div>
                    <div className="questions">{Questions[currQuestion].questionText}</div>
                    <div className="instructions">Choose one option</div>
                    <div className="row">

                        {Questions[currQuestion].answerOptions.map((answerOption, index) => (
                            <button className="ansDiv" key={index}
                                onClick={() => { handleCorrectAns(answerOption.isCorrect); nextQuestion() }}
                            >
                                {answerOption.answerText}</button>
                        ))}

                    

                    </div>

               </div>

                        }
                        </div>

        </div>
    )
}
export default Quiz;
import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {
    

    // initiating the local state
    state = {
        quiestions: {
            1: 'Which planet in our solar system is known as the Red Planet?',
            2: 'Which is the smallest planet in our solar system?',
            3: 'Which planet in our solar system is known as the Blue Planet?',
            4: 'What is the name of the largest moon of Saturn?',
            5: 'Who invented the Computer?'
        },
        answers: {
            1: {
                1: 'Mars',
                2: 'Jupiter',
                3: 'Saturn'
            },
            2: {
                1: 'Venus',
                2: 'Mercury',
                3: 'Earth'
            },
            3: {
                1: 'Earth',
                2: 'Mars',
                3: 'Saturn'
            },
            4: {
                1: 'Jupiter',
                2: 'Pluto',
                3: 'Titan'
            },
            5: {
                1: 'Charles Babbage',
                2: 'Johannes Gutenberg',
                3: 'Alexander Fleming'
            }

        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1',
            4: '3',
            5: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            
            <div className="Content">

                
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
            
        );
        
    }
}
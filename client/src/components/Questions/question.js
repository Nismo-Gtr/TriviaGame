import React, { Component } from 'react'
import API from '../../utils/API'
import { Redirect } from 'react-router-dom'
import Countdown from '../Countdown/Countdown'
// import correctSound from '../../assets/SmartestManAlive.mp3'
import wrongSound from '../../assets/error.wav'
import yeah from '../../assets/shoutYeah.wav'
import './question.css'
// import Footer from ' ../Footer'
import Button from '../../../node_modules/react-materialize/lib/Button';
// import ResultsPage from '../ResultsPage'
import Delay from 'react-delay'
// import { TimeoutError } from '../../../../../../../node_modules/rxjs';
// import StartPage from '../StartPage'
// import Audio from '../Audio/Audio.js'


class Question extends Component {

    state = {
        questions: null,
        counter: 0,
        playerScore: 0,
        playerWrong: 0,
        answerCorrect: null,
        correctStreak: 10,
        clicked: false,
        sound: ""
    };



    componentWillMount() {
        console.log(this.props.location.state)
        API.getQuestions(this.props.location.state.category, this.props.location.state.difficulty)
            .then(res => {
                const questions = []
                for (let i = 0; i < 10; i++) {

                    const answers = [
                        {
                            correct: "correct",
                            answer: res.data.results[i].correct_answer.replace("&amp;", `&`).replace("&quot;", `"`).replace("&quot;", `"`).replace("quot;", `"`).replace("&#039;", `'`).replace("#039;", `'`)
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[0].replace("&amp;", `&`).replace("&quot;", `"`).replace("&quot;", `"`).replace("quot;", `"`).replace("&#039;", `'`).replace("#039;", `'`)
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[1].replace("&amp;", `&`).replace("&quot;", `"`).replace("&quot;", `"`).replace("quot;", `"`).replace("&#039;", `'`).replace("#039;", `'`)
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[2].replace("&amp;", `&`).replace("&quot;", `"`).replace("&quot;", `"`).replace("quot;", `"`).replace("&#039;", `'`).replace("#039;", `'`)
                        },
                    ];
                    // console.log(questions)
                    questions.push({
                        question: res.data.results[i].question.replace("&amp;", `&`).replace("&quot;", `"`).replace("&quot;", `"`).replace("quot;", `"`).replace("&#039;", `'`).replace("#039;", `'`),
                        answers: this.shuffle(answers)
                    });
                }
                this.setState({ questions })
            })
    }


    shuffle = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleTimeout = () => {
        setTimeout(() => {
            if (this.state.isDisabled === true) {

                this.setState({
                    counter: this.state.counter + 1,
                    isDisabled: false,
                    answerCorrect: null,
                    totalCount: this.state.totalCount + 1,
                    clicked: false,
                    sound: ''
                })
            } else {
                this.setState({
                    playerWrong: this.state.playerWrong + 1,
                    counter: this.state.counter + 1,
                    isDisabled: false,
                    answerCorrect: null,
                    totalCount: this.state.totalCount + 1,
                    clicked: false,
                    sound: ''
                })
            }
        }, 1000);
    }

    clickCheck = event => {
        // console.log(event.target)
        let answer = event.target.id
        if (answer === "correct") {
            this.setState({
                isDisabled: !this.state.isDisabled,
                answerCorrect: true,
                correctStreak: this.state.correctStreak + 10,
                playerScore: this.state.playerScore + this.state.correctStreak,
                clicked: true,
                sound: yeah
            });
        } else {
            this.setState({
                isDisabled: !this.state.isDisabled,
                answerCorrect: null,
                playerWrong: this.state.playerWrong + 1,
                correctStreak: 10,
                clicked: true,
                sound: wrongSound
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className='quiz'>
                    <h2><Countdown handleTimeout={this.handleTimeout} clicked={this.state.clicked} /></h2>
                    <div id="question">
                        {this.state.questions && this.state.counter < 10 ?
                            this.state.questions[this.state.counter].question :
                            <Delay wait={2000}><Redirect to={{ pathname: "/endGame", state: { playerScore: this.state.playerScore } }}></Redirect></Delay>}
                    </div>
                    {this.state.questions && this.state.counter < 10 ?
                        <div>
                            {this.state.questions[this.state.counter].answers.map(({ correct, answer }) => (
                                <div><audio src={this.state.sound} autoPlay></audio><Button
                                    id={correct}
                                    disabled={this.state.isDisabled}
                                    onClick={this.clickCheck}
                                    className={'answerButton'}>
                                    {answer}</Button><br /><br />
                                </div>
                            ))}
                            <h4>Current Score: {this.state.playerScore}</h4>
                        </div>
                        : <Delay wait={1000}><Redirect to={{ pathname: "/endGame", state: { playerScore: this.state.playerScore } }}></Redirect></Delay>}
                    < br />
                </div>
            </div >
        );
    }
}

export default Question     
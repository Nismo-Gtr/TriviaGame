import React, { Component } from "react";
// import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import { firebase } from "./firebase";
import Question from './components/Questions';
import StartPage from './components/StartPage';
import ResultsPage from './components/ResultsPage'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    question: [],
    correctAnswer: '',
    wrongAnswers: [],
    allAnswers: [],
    playerScore: 0,
    playerWrong: 0

  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(`firebaseUser=${firebaseUser}`);
        var trueUser = firebaseUser.email;
        console.log("trueUs er=", trueUser);
        this.setState({ trueUser })


      } else {
        console.log('not logged in');
        this.setState({ trueUser: null })
      }
    });

  };

  render() {
    return (
      <div>
        {/* <NavBar username={this.state.trueUser}></NavBar> */}
        <Jumbotron/>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route exact path={process.env.PUBLIC_URL + "/game"} component={Question} />
            <Route exact path="/endGame" component={ResultsPage} />
          </div>
      </div>
    );
  }
}
export default App;
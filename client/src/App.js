import React, { Component } from "react";
// import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import { firebase } from "./firebase";
import Question from './components/Questions';
import StartPage from './components/StartPage';
import ResultsPage from './components/ResultsPage'
import { Route, Switch } from "react-router-dom";

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
        console.log("trueUser=", trueUser);
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
            <Switch>
            <Route exact path="/" component={StartPage} />
            <Route path={process.env.PUBLIC_URL + "/game"} component={Question} />
            <Route path={process.env.PUBLIC_URL + "/endGame"} component={ResultsPage} />
            </Switch>
          </div>
      </div>
    );
  }
}
export default App;
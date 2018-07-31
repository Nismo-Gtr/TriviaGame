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
        // console.log(`firebaseUser=${firebaseUser}`);
        var trueUser = firebaseUser.email;
        // console.log("trueUser=", trueUser);
        this.setState({ trueUser })


      } else {
        console.log('not logged in');
        this.setState({ trueUser: null })
      }
    });

  };

//   componentWillMount() {
//   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(function() {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
//   })
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// }
  render() {
    return (
      <div>
        {/* <NavBar username={this.state.trueUser}></NavBar> */}
        <Jumbotron />
          <div>
            <Switch>
            <Route path="/" exact render={(props) => (<StartPage user={this.state.trueUser} {...props}/>)}/>
            <Route path="/game" exact render={(props) => (<Question user={this.state.trueUser} {...props}/>)}/>
            <Route path="/endGame" exact render={(props) => (<ResultsPage user={this.state.trueUser} {...props}/>)}/>
            </Switch>
          </div>
      </div>
    );
  }
}
export default App;
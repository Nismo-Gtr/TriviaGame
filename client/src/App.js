import React, { Component } from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from './components/Footer';
import { firebase } from "./firebase";
import Question from './components/Questions';
import StartPage from './components/StartPage';
import ResultsPage from './components/ResultsPage'
import { Route, Switch } from "react-router-dom";

const style = {
  height: '100vh',
  width: '100vw',
  margin: '0',
  padding: '0'
}



class App extends Component {
  state = {
    question: [],
    correctAnswer: '',
    wrongAnswers: [],
    allAnswers: [],
    playerScore: 0,
    playerWrong: 0,
    username: ''
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        var trueUser = user.displayName;
        var email = user.email;
        this.setState({ trueUser, email })
        // console.log("testResult = ", user, user.email);
        console.log("trueUser=", trueUser);
      } else {
        console.log('not logged in');
        this.setState({ trueUser: null })
      }
    });

  };

  // componentWillMount() {
  //   firebase.auth.updateCurrentUser(user => {
  //     user.displayName = this.state.username
  //   })
  // }

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
      <div style={style}>
        <Jumbotron user={this.state.trueUser}/>
          <Switch>
            <Route path="/" exact render={(props) => (<StartPage user={this.state.trueUser} email={this.state.email} {...props} />)} />
            <Route path="/game" exact render={(props) => (<Question user={this.state.trueUser} email={this.state.email} {...props} />)} />
            <Route path="/endGame" exact render={(props) => (<ResultsPage user={this.state.trueUser} email={this.state.email}  {...props} />)} />
          </Switch> 
          <Footer/>
      </div>
    );
  }
}
export default App;
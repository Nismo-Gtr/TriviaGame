import React, { Component } from "react";
import wrongSound from '../../assets/error.wav'
// import ResultsPage from '../ResultsPage/ResultsPage'


class Countdown extends Component {
  constructor(props) {
    super(props)
    // console.log(props)

    this.state = {
      currentCount: 10,
      totalCount: 0,
      sound: null
    }
  }
  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })

    if (this.props.clicked === true) {
      // this.setState({sound: wrongSound})
      clearInterval(this.intervalId);
      this.setState({ totalCount: this.state.totalCount + 1 })
      this.setState({ currentCount: 10 })
      this.props.handleTimeout();
      // this.setState({sound: null});
      this.intervalId = setInterval(this.timer, 1000);
    } else if (this.state.currentCount < 1) {
      var audio = new Audio(wrongSound);
      audio.play();
      clearInterval(this.intervalId);
      this.setState({ totalCount: this.state.totalCount + 1 })
      this.setState({ currentCount: 10 })
      this.props.handleTimeout();
      this.intervalId = setInterval(this.timer, 1000);
      this.setState({ sound: null });
    } else if (this.state.totalCount > 9) {
      clearInterval(this.intervalId);
      this.setState({ currentCount: null })
      // console.log("End of Game")
    } else {
      // console.log(this.state.currentCount);
      // console.log(this.state.totalCount);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>{this.state.currentCount}
        <audio src={this.state.sound} autoPlay></audio></div>
    );
  }
}



export default Countdown
import React, { Component } from "react";
// import ResultsPage from '../ResultsPage/ResultsPage'


class Countdown extends Component {
  constructor(props) {
    super(props)
    // console.log(props)

   this.state = {
    currentCount: 10,
    totalCount: 0
  }
  }
  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })

    if (this.state.currentCount < 1 || this.props.clicked === true) {
      clearInterval(this.intervalId);
      this.setState({totalCount: this.state.totalCount + 1})
      this.setState({ currentCount: 10 })
      this.props.handleTimeout();
      this.intervalId = setInterval(this.timer, 1000);
    } else if (this.state.totalCount > 9) {
      clearInterval(this.intervalId);
      this.setState({currentCount: null})
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
      <div>{this.state.currentCount}</div>
    );
  }
}



export default Countdown
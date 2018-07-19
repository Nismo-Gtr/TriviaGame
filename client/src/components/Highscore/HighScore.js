import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import 'font-awesome/css/font-awesome.css'
import Table from 'react-bootstrap/lib/Table'
import Image from 'react-bootstrap/lib/Image'


class App extends Component {

  state = {
    hs100Days: [],
    hs100All: [],
    current: true

  }

  // 
  getjpData(url, stateName) {
    console.log('I hit');
    axios.get(url)
      .then(({ data }) => {
        this.setState({ [stateName]: data });
        console.log(this.state.hs100Days);
      })
  }

  scoreUpdate(value) {
    if (this.state.current !== value) {
      this.setState({ current: value });
    }
  }

  componentDidMount() {
    // firebase.auth.onAuthStateChanged(firebaseUser => {
    //   if (firebaseUser) {
    //     console.log(`firebaseUser=${firebaseUser}`);
    //     var trueUser = firebaseUser.email;
    //     console.log("tU=", trueUser);
    //     this.setState({ trueUser });

    //   } else {
    //     console.log('not logged in');
    //     this.setState({ trueUser: null })
    //   }
    //   this.getjpData(`firebaseUser=${firebaseUser}`, 'hs100Days');
    //   this.getjpData(`firebaseUser=${firebaseUser}`, 'hs100All');

    // });
  };


  render() {
    const { hs100Days, hs100All, current } = this.state;
    return (
      <div className="App container">
        <Table striped boardered condensed hover ClassName='colorLightblue'>
          <thread>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th onClick={() => this.scoreUpdate(true)}> Highest Score in the last 30 Days</th>
              <th onClick={() => this.scoreUpdate(false)}>Highest score of all time</th>
            </tr>
          </thread>
          <tbody>
            {current && (hs100Days.map((row, index) => (

              <tr key={row.trueUser}>
                <td>{index + 1}</td>
                {/* <td><a href={`firebaseUser=${firebaseUser}`}>
                  <Image scr={row.image} className="imgHight" circle alt='User' /> {row.trueUser}
            </a></td> */}
                <td>{row.recent}</td>
                <td>{row.allTime}</td>
              </tr>
            ))
            )}

            {current === false && (
              hs100All.map((row, index) => (
                <tr key={row.trueUser}>
                  <td>{index + 1}</td>
                  {/* <td><a href={`firebaseUser=${firebaseUser}`} >
                    <Image src={row.img} className='imgHeight' circle alt='User' /> {row.trueUser}</a></td> */}
                  <td>{row.recent}</td>
                  <td>{row.alltime}</td>
                </tr>
              ))
            )}
          </tbody>

        </Table>
      </div>
    );
  };

}

export default App;

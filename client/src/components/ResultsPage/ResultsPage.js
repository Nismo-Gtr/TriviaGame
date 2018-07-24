import React from "react"
// import './ResultsPage.css'
import { Footer } from 'react-materialize'
import { Link } from 'react-router-dom'


const style = {
    backgroundColor: "blue",
    height: "700px",
    marginTop: "-30px",
    textAlign: "center"
};

const button = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    height: '50px',
    width: '225px',
    paddingBottom: '50px'
};
const inst = {
    textAlign: "center",
    fontFamily: "Contrail One",
    fontSize: "30px",
    color: "orange",
    paddingTop: "30px"
};
const headline = {
    fontSize: "42px",
    color: "orange",
    textAlign: "center",
    fontFamily: 'Contrail One',
    paddingTop: '50px'
};

const score = {
    fontSize: "64px"
}

const footerStyle = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    height: "80px",
    width: "100%",
    marginTop: "0px",
    borderTopStyle: "solid",
    borderTopColor: "orange"
}
// const diff = {
//     fontFamily: 'Contrail One',
//     fontSize: '32px',
//     color: 'orange',
//     backgroundColor: 'black',
//     marginLeft: '42.5%',
//     height: '50px',
//     width: '225px',
//     marginBottom: '20px',
//     textAlign: 'center'
// };

// class ResultsPage extends Component {

//     state = {
        
//     }

    // render() {
    //     return (
    const ResultsPage = (props) => (
            <div className="start" style={style}>
                <div className="button">
                    <div className="instructions" style={headline}>
                        End of Game!
                <ul style={inst}>
                            <li>You did great! </li>
                            {props.user}
                            <li>Your score is:</li><br />
                            <li style={score}>{props.location.state.playerScore}</li>
                        </ul>
                    </div>
                </div>
                <Link className="waves-effect waves-light btn-large" to="/" style={button}>Play Again!</Link>
                <div>
                    <Footer style={footerStyle}></Footer>
                </div>
            </div>
        );
//     }
// }

export default ResultsPage;

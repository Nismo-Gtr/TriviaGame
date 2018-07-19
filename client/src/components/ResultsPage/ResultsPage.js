import React from "react"
// import './ResultsPage.css'
import { Footer }    from 'react-materialize'
import Delay from 'react-delay'

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

const ResultsPage = (props) => (
        <Delay wait={300}>
        <div className="start" style={style}>
            <div className="button">
                <div className="instructions" style={headline}>
                    End of Game!
                <ul style={inst}>
                        <li>You did great! </li>
                        <li>Your score is:</li><br />
                        <li style={score}>{props.playerScore}</li>
                    </ul>
                </div>
            </div>
            <a className="waves-effect waves-light btn-large" href="/" style={button}>Play Again!</a>
            <div>
                    <Footer style={footerStyle}></Footer>
                </div>
        </div>
        </Delay>
);

export default ResultsPage;

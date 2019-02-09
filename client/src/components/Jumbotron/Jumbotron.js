import React from "react";
import "./jumbotron.css";

// const size = {
//     height: "165px",
//     backgroundColor: "black",
//     borderBottom: "4px",
//     borderBottomStyle: "solid",
//     borderColor: "orange"
// };
// const header = {
//     font: "Press Start 2P",
//     marginTop: "-5px",
//     fontSize: "50px",
//     color: "orange",
//     textAlign: "center",
//     letterSpacing: "15px"
// };
// const inst = {
//     fontFamily: "Press Start 2P",
//     textAlign: "center",
//     color: "orange",
//     letterSpacing: "5px",
//     fontSize: "12px"
// };

const Jumbotron = (props) => (
    <div className="size jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="header">Trivia Time!</h1>
                {console.log(props.user)}
                {props.user === null ? "" : <h3 className="userHeader">{props.user}</h3>}
        </div>
    </div>
);

export default Jumbotron;
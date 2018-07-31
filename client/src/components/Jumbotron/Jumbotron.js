import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
    <div className="size jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="header">Trivia Time!</h1><p>github logo</p>
            <p className="inst">Click play to start!</p>
            {/* <p className="inst">Invite your friends for some competition!</p> */}
        </div>
    </div>
);

export default Jumbotron;
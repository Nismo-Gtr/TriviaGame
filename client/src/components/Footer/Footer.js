import React from "react";

const style = {
    bottom: "0%",
    backgroundColor: "grey",
    // width: "100vw",
    // position: "fixed",
    height: "10vh",
    borderTopStyle: "solid",
    borderTopColor: "orange"
};
const font = {
    color: "blue",
    fontWeight: "bold",
    fontFamily: 'Contrail One',
    fontSize: "30px",
    marginTop: "5px",
    textAlign: "center",
    textShadow: "2px 2px orange"    
};


const Footer = (props) => (
<footer style={style} className="footer">
		<div style={font} className="container">
			<span>{props.playerScore === undefined ? '' : `Current Score - ${props.playerScore}`}</span>
		</div>
	</footer>
)

export default Footer;
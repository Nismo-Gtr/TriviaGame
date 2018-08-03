import React from "react";

const style = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    width: "100%",
    height: "80px",
    marginTop: "0px", 
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
			<span>{props.user === null ? "" : `Current Player - ${props.user}`}</span>
		</div>
	</footer>
)

export default Footer;
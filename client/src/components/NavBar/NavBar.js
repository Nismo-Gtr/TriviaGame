import React, {Component} from "react";
import { Button, Modal } from "react-materialize";
import {auth} from "../../firebase"

const style = {
    backgroundColor: "grey",
    height: "40px",
    textAlign: "center",
    borderBottom: "4px solid blue",
};
const font = {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "24px",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    height: "500px"
};
const btn = {
    color: "blue",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    fontWeight: "bold",
    fontSize: "28px"
};

class NavBar extends Component{
        state = { email: "", password: "", error:null }

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
            [name]: value
            });
        }

        handleCreateUser = event => {
            event.preventDefault();
            auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>this.setState({email:"", password:"", error:null}))
            .catch(error =>{
                this.setState({error})
            });
        }

        handleUserLogin = event => {
            event.preventDefault();
            auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>this.setState({email:"", password:"", error:null}))
            .catch(error =>{
                this.setState({error})
            });
        }

        handleUserLogout = event => {
            event.preventDefault();
            auth.doSignOut();
        }

    render(){
        return(
    <div style={style}>
        <Modal
            style={font}
            header='Please login or create a profile:'
            trigger={<Button style={btn}>Login</Button>}>
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalLongTitle">Sign In</h6>

                </div>

                <div className="modal-body">
                    <form>
                        <input id="txtEmail" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
                        <input id="txtPassword" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                    </form>
                </div>

                <div className="modal-footer">
                    <button id="btnLogin" onClick={this.handleUserLogin} className="btn btn-action" disabled={!this.state.email || !this.state.password}>Log in</button>
                    <button id="btnSignUp" onClick={this.handleCreateUser} disabled={!this.state.email || !this.state.password} className="btn btn-secondary">Sign up</button>
                    <button id="btnLogout" onClick={this.handleUserLogout} className={this.props.username?"btn btn-action":"btn btn-action hide"}>Log out</button>
                </div>
            { this.state.error && <p>{this.state.error.message}</p> }
            </div>
        </Modal>
    </div>
);
}
}
export default NavBar;
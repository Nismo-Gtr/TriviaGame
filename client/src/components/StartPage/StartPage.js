import React, { Component } from "react"
import { Modal, Footer, Row, Input } from "react-materialize"
import { Link } from 'react-router-dom'
import { auth } from "../../firebase"


const style = {
    backgroundColor: "blue",
    height: "700px",
    marginTop: "-30px"
};
const button = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    marginLeft: '42.5%',
    height: '50px',
    width: '225px',
    padding: '0 40px',
};
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
const font = {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "24px",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    height: "500px"
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
const diff = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    marginLeft: '42.5%',
    height: '50px',
    width: '225px',
    marginBottom: '20px',
    textAlign: 'center'
};

class StartPage extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        error: null,
        difficulty: 'easy',
        category: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleCreateUser = event => {
        event.preventDefault();
        auth.doCreateUserWithEmailAndPassword(this.state.username, this.state.email, this.state.password)
            .then(() => this.setState({ username: "", email: "", password: "", error: null, loggedIn: true }))
            .catch(error => {
                this.setState({ error })
            });
    }

    handleUserLogin = event => {
        event.preventDefault();
        auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.setState({ email: "", password: "", error: null, loggedIn: true }))
            .catch(error => {
                this.setState({ error })
            });
    }

    handleUserLogout = event => {
        event.preventDefault();
        auth.doSignOut().then(() => this.setState({ loggedIn: false })).catch(error => { this.setState({ error }) });
    }

    handleChange = value => {
        this.setState({ difficulty: value })
        // console.log(this.state.difficulty.currentTarget.options.selectedIndex)
        let selection = this.state.difficulty.currentTarget.options.selectedIndex;
        if (selection === 0) {
            this.setState({ difficulty: 'easy' })
            // console.log(this.state.difficulty)
        } else if (selection === 1) {
            this.setState({ difficulty: 'medium' })
            // console.log(this.state.difficulty)
        } else if (selection === 2) {
            this.setState({ difficulty: 'hard' })
            // console.log(this.state.difficulty)
        }
    }

    categoryList = (value) => {
        // Code for dynamic category list
        // console.log(value.currentTarget.selectedOptions[0].value)
        this.setState({ category: value.currentTarget.selectedOptions[0].value })
        // console.log(this.state.category)
    }

    render() {
        return (
            <div className="start" style={style}>
                <div className="button">
                    <p className="instructions" style={headline}>
                        {/* {console.log(this.props.user)} */}
                        Instructions:</p>
                    <ul style={inst}>
                        <li>Login to or create your account below.</li>
                        {/* <li>Invite friends to play with you!</li> */}
                        <li>You will be shown ten questions and get ten seconds to answer each one.</li>
                        <li>Choose your desired category and difficulty in the dropdown.</li>
                        <li>Click "Start Game" when you're ready to begin!</li>
                    </ul>
                    <Row style={diff}>
                        <Input onChange={this.categoryList} category={this.state.category} s={12} type='select'>
                            <option style={diff} value=''>Random</option>
                            <option style={diff} value='9'>General Knowledge</option>
                            <option style={diff} value='10'>Books</option>
                            <option style={diff} value='11'>Film</option>
                            <option style={diff} value='12'>Music</option>
                            {/* <option style={diff} value='13'>Musicals and Theatres</option> */}
                            <option style={diff} value='14'>Television</option>
                            <option style={diff} value='15'>Video Games</option>
                            <option style={diff} value='16'>Board Games</option>
                            <option style={diff} value='17'>Science and Nature</option>
                            <option style={diff} value='18'>Computers</option>
                            {/* <option style={diff} value='19'>Mathematics</option> */}
                            <option style={diff} value='20'>Mythology</option>
                            <option style={diff} value='21'>Sports</option>
                            <option style={diff} value='22'>Geography</option>
                            <option style={diff} value='23'>History</option>
                            {/* <option style={diff} value='24'>Politics</option> */}
                            {/* <option style={diff} value='25'>Art</option> */}
                            <option style={diff} value='26'>Celebrities</option>
                            {/* <option style={diff} value='27'>Animals</option> */}
                            <option style={diff} value='28'>Vehicles</option>
                            {/* <option style={diff} value='29'>Comics</option> */}
                            {/* <option style={diff} value='30'>Gadgets</option> */}
                            <option style={diff} value='31'>Japanese Anime and Manga</option>
                            <option style={diff} value='32'>Cartoons and Animations</option>
                        </Input>
                    </Row>
                    <Row style={diff}>
                        <Input onChange={this.handleChange} s={12} type='select'>
                            <option style={diff} value='easy'>Easy</option>
                            <option style={diff} value='medium'>Medium</option>
                            <option style={diff} value='hard'>Hard</option>
                        </Input>
                    </Row>
                    <Modal
                        style={font}
                        header={this.props.user === null ? 'Please login or create a profile:' : `Welcome ${this.props.user}`}
                        trigger={this.props.user === null ? <a className="waves-effect waves-light btn-large" href="" style={button}>Login</a> : <a className="waves-effect waves-light btn-large" href="" style={button}>Log out</a>}>
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
                                {this.props.user === null ? [<button id="btnSignUp" onClick={this.handleCreateUser} className="btn btn-secondary col s2 m2" style={diff}>Sign up</button>, <button id="btnLogin" onClick={this.handleUserLogin} className="btn btn-action col s10 m10" style={button}>Log in</button>]
                                    // <button id="btnSignUp" onClick={this.handleCreateUser} className="btn btn-secondary">Sign up</button>
                                    : <button id="btnLogout" onClick={this.handleUserLogout} className="btn btn-action" style={button}>Log out</button>}
                            </div>
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                    </Modal><br />
                </div>
                {this.props.user === null ? "" : <Link className="waves-effect waves-light btn-large" to={{ pathname: '/game', state: { difficulty: this.state.difficulty, user: this.state.trueUser, category: this.state.category } }} style={button}>Start Game</Link>}
                <div>
                    <Footer style={footerStyle}></Footer>
                </div>
            </div>
        );
    }
}

export default StartPage;

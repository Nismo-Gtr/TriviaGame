import React, { Component } from "react"
import { Modal, Row, Dropdown } from "react-materialize"
import { Link } from 'react-router-dom'
import { auth, firebase } from "../../firebase"
import './StartPage.css'

class StartPage extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        passwordVerify: "",
        error: null,
        difficulty: 'easy',
        catTitle: 'Random',
        category: '',
        user: '',
        catClick: false,
        diffClick: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    handleCreateUser = event => {
        event.preventDefault();
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.setState({ username: this.state.username, email: this.state.email, password: "", error: null, loggedIn: true }))
            .catch(error => {
                this.setState({ error })
            })
            .then(() => {
                let user = firebase.auth.currentUser;
                if (user) {
                    user.updateProfile({ displayName: this.state.username })
                        .then(() => { user.sendEmailVerification() })
                        .catch(error => {
                            this.setState({ error })
                        })
                }
            })
    }

    handleUserLogin = event => {
        event.preventDefault();
        auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.setState({ username: "", email: "", password: "", error: null, loggedIn: true }))
            .catch(error => {
                this.setState({ error })
            })
    }

    handleUserLogout = event => {
        event.preventDefault();
        auth.doSignOut().then(() => this.setState({ loggedIn: false })).catch(error => { this.setState({ error }) });
    }

    handleChange = value => {
        this.setState({ diffClick: false })
        this.setState({ catClick: false })
        console.log(value.currentTarget.value)
        let selection = value.currentTarget.value;
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
        console.log(value.currentTarget.id)
        this.setState({ category: value.currentTarget.value, catTitle: value.currentTarget.id, catClick: false })
        // console.log(this.state.category)
    }

    listClick = () => {
        this.setState({ catClick: true })
        this.setState({ diffClick: false })
    }

    diffListClick = () => {
        this.setState({ catClick: false })
        this.setState({ diffClick: true })
    }


    render() {
        return (
            <div className="wrapper" >
                {this.props.user === null ? "" : <div className='inst'><p>Gamer:</p><h3>{this.props.user}</h3></div>}
                <div>
                    <Modal
                        className="modal"
                        header={"Instructions"}
                        trigger={<a id='buttonOne' className="startButton waves-effect waves-light btn-large" href="" >Instructions</a>}>
                        <div className="modal-content">
                            <div className="modal-body">
                                <ul className="inst-body">
                                    <li>Login or create your account on the homepage</li><br />
                                    {/* <li>Invite friends to play with you!</li> */}
                                    <li>You will be shown ten questions and get ten seconds to answer each one.</li><br />
                                    <li>Choose your desired category and difficulty in the dropdown.</li><br />
                                    <li>Click "Start Game" when you're ready to begin!</li>
                                </ul>
                            </div>
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                    </Modal><br />
                    <Row >
                        {/* <Dropdown trigger={<button className='startButton waves-effect waves-light btn-large'>{this.state.catTitle}</button>} onChange={this.categoryList} category={this.state.category} s={12}> */}
                        {this.state.catClick === false ?
                            <button onClick={this.listClick} className="startButton waves-effect waves-light btn-large" href="">{this.state.catTitle}</button>
                            :
                            <div className='catList'>
                                <ul>
                                    <li onClick={this.categoryList} value='0' id="Random">Random</li>
                                    <li onClick={this.categoryList} value='9' id="General Knowledge">General Knowledge</li>
                                    <li onClick={this.categoryList} value='10' id="Books">Books</li>
                                    <li onClick={this.categoryList} value='11' id="Film">Film</li>
                                    <li onClick={this.categoryList} value='12' id="Music">Music</li>
                                    {/* <li  value='13'>Musicals and Theatres</li>  */}
                                    <li onClick={this.categoryList} value='14' id="Television">Television</li>
                                    <li onClick={this.categoryList} value='15' id="Video Games">Video Games</li>
                                    <li onClick={this.categoryList} value='16' id="Board Games">Board Games</li>
                                    <li onClick={this.categoryList} value='17' id="Science and Nature">Science and Nature</li>
                                    <li onClick={this.categoryList} value='18' id="Computers">Computers</li>
                                    {/* <li  value='19'>Mathematics</li>  */}
                                    <li onClick={this.categoryList} value='20' id="Mythology">Mythology</li>
                                    <li onClick={this.categoryList} value='21' id="Sports">Sports</li>
                                    <li onClick={this.categoryList} value='22' id="Geography">Geography</li>
                                    <li onClick={this.categoryList} value='23' id="History">History</li>
                                    {/* <li  value='24'>Politics</li>  */}
                                    {/* <li  value='25'>Art</li>  */}
                                    <li onClick={this.categoryList} value='26' id="Celebrities">Celebrities</li>
                                    {/* <li  value='27'>Animals</li>  */}
                                    <li onClick={this.categoryList} value='28' id="Vehicles">Vehicles</li>
                                    {/* <li  value='29'>Comics</li>  */}
                                    {/* <li  value='30'>Gadgets</li>  */}
                                    <li onClick={this.categoryList} value='31' id="Japanese Anime and Manga">Japanese Anime and Manga</li>
                                    <li onClick={this.categoryList} value='32' id="Cartoons and Animations">Cartoons and Animations</li>
                                </ul>
                            </div>
                        }
                        {/* </Dropdown> */}
                    </Row>
                    <Row>
                        {this.state.diffClick === false ?
                            <button onClick={this.diffListClick} className="startButton waves-effect waves-light btn-large">{this.state.difficulty}</button>
                            :
                            <div className='catList'>
                                <ul>
                                    <li onClick={this.handleChange} id='easy'>Easy</li>
                                    <li onClick={this.handleChange} value='1'>Medium</li>
                                    <li onClick={this.handleChange} value='2'>Hard</li>
                                </ul>
                            </div>
                        }
                    </Row>
                    {this.props.user === null ? "" : <a className="startButton waves-effect waves-light btn-large" href="" onClick={this.handleUserLogout} >Log out</a>}
                    <Modal
                        className="font"
                        header={this.props.user === null ? 'Please create a profile below' : `Welcome ${this.props.email}`}
                        trigger={this.props.user === null ? <a className="startButton waves-effect waves-light btn-large" href="" >Create User</a> : ""}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title">Log In</h6>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="User Name" />
                                    <input id="txtEmail1" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} autoComplete="username" placeholder="Email Address"/>
                                    <input id="txtPassword1" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} autoComplete="current-password" placeholder="Password" />
                                    {/* <input id="txtPasswordVerify" type="password" name="passwordVerify" value={this.state.passwordVerify} onChange={this.handleInputChange} placeholder="Confirm Password" /> */}
                                </form>
                            </div>

                            <div className="modal-footer">
                                {this.props.user === null ? <button id="btnLogin" onClick={this.handleCreateUser} className="btn btn-action col s10 m10" >Create User</button> :
                                    <button id="btnLogout" onClick={this.handleUserLogout} className="btn btn-action" >Log out</button>}
                            </div>
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                    </Modal><br />
                    <Modal
                        className="font"
                        header={this.props.user === null ? 'Please login below' : `Welcome ${this.props.user}`}
                        trigger={this.props.user === null ? <a className="startButton waves-effect waves-light btn-large" href="" >Log in</a> : ""}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title">Log In</h6>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input id="txtEmail" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} autoComplete="username" placeholder="User Name"/>
                                    <input id="txtPassword" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} autoComplete="current-password" placeholder="Password"/>
                                </form>
                            </div>

                            <div className="modal-footer">
                                {this.props.user === null ? <button id="btnLogin" onClick={this.handleUserLogin} className="btn btn-action col s10 m10" >Log in</button>
                                    : <button id="btnLogout" onClick={this.handleUserLogout} className="btn btn-action" >Log out</button>}
                            </div>
                            {this.state.error && <p>{this.state.error.message}</p>}
                        </div>
                    </Modal><br />
                    <Link className="startButton waves-effect waves-light btn-large" to={{ pathname: '/game', state: { difficulty: this.state.difficulty, user: this.state.trueUser, category: this.state.category } }} >Start Game</Link>
                </div>
            </div>
        );
    }
}

export default StartPage;
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Start extends Component {
    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    logIn(user, pass) {
        // launch auth process

    }
    signUp(user, pass) {
        // launch accountCreate
    }
    render() {
        // set available props
        const { value, onLogIn, onSignUp } = this.props
        return (
            // JSX goes here
            <p>
            The last 100 Days of Code Logging App you'll ever need. 
            <br/>

            <input name = "user" placeholder = "username" /> 
            <input name = "pass" placeholder = "password" /> 
            <button onClick = { this.signUp() } > Log In < /button> 
            <button onClick = { this.logIn() } > Sign Up < /button> 
            </p>
        )
    }
}

Start.propTypes = {
  logIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired
};

export default Start;
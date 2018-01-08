import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class SendTweet extends Component {
  render() {
    return (
      <div className="SentTweet">
        <header className="Tweet-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Tweet-title">Let's Try Posting a Tweet</h1>
        </header>
        <p className="Tweet-intro">
          Somewhere here we will create an input field and execute a function to send the tweet.
        </p>
      </div>
    );
  }
}

export default SendTweet;

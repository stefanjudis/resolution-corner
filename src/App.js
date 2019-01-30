import React, { Component } from 'react';
import ReactGoogleAuth from 'react-google-auth';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


function SignIn(props) {
  if(props.initializing) {
      return <div className="Text Text-emphasis">Initializing...</div>;
  }
  if(props.error) {
      console.log('Error', props.error);
      return <div className="Text Text-strong">Error!</div>;
  }
  return <div>
      <button className="Button Button-primary" onClick={props.onSignInClick}>Sign in</button>
      {props.signingIn && <div>Signing in...</div>}
  </div>;
}

function Loader(props) {
  return <div>Loading...</div>;
}

export default ReactGoogleAuth({
  clientId: "765507442514-21tl4cetch1tl4823m2ekjcr6dejsd45.apps.googleusercontent.com",
  loader: Loader,
  scope: "https://www.googleapis.com/auth/drive.appdata",
  signIn: SignIn
})(App);

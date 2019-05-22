import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: false };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '323151311931-fsht1n7dcq4m4t3eahh1c06uh38mer8i.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(ex => {
          console.log('google', ex.message, ex);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  render() {
    if (this.state.isSignedIn) {
      return <button onClick={this.onSignOut}>Log out</button>;
    }
    return <button onClick={this.onSignIn}>Login</button>;
  }
}
export default GoogleAuth;

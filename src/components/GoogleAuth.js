import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../actions';

class GoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(ex => {
          console.log('google', ex.message, ex);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.SignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.SignOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  render() {
    if (this.props.isSignedIn) {
      return <button onClick={this.onSignOut}>Log out</button>;
    }
    return <button onClick={this.onSignIn}>Login</button>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { SignIn, SignOut }
)(GoogleAuth);

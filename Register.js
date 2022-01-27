import React from 'react';
import { auth, db } from './Fire.js';
import SignupForm from './Signupform';
import LoginForm from './Login';
import "./Login.css"

class Twocomponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: 'inactive',
      userType: 'new'
    };

    this.changeUserType = this.changeUserType.bind(this);
    this.checkUserState = this.checkUserState.bind(this);
  }
  changeUserType(e) {
    e.preventDefault();
    const newUserType = this.state.userType === 'returning' ? 'new' : 'returning';
    this.setState({ userType: newUserType });
  }
  checkUserState() {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({ userState: 'active' })
        console.log(this.state.userState);
      } else {
        this.setState({ userState: 'inactive' })
        console.log(this.state.userState);
      }
    });
  }
  render() {
    if (this.state.userState === 'inactive') {
      return (
        <>
          <section className="container" id="formContainer">
            {(this.state.userType === 'returning') &&
              (<>
                <LoginForm checkUserState={this.checkUserState} /><br/><br/>
                <p className="formText"><a className="formLink"  href='#@mail.com' onClick={this.changeUserType}><button id="link">New User? Create an account here</button></a></p>
              </>)
            } {(this.state.userType !== 'returning') &&
              (<>
                <SignupForm /><br/><br/>
                <p className="formText"><a className="formLink" id="linkLogin" href='#@mail.com' onClick={this.changeUserType}><button id="link">Existing User? Sign in</button></a></p>
              </>)
            }
          </section>
        </>
      )
    }
  }
}

export default Twocomponents;
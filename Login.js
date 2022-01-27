import { auth, db } from './Fire.js';
import React from 'react';
import InputField from './Inputfield';
import './Login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      email: "",
      Password: "",
      uid:""
    }
    this.login = this.login.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(key, value) {
    console.log('Inside updateSate', key, value)
    this.setState({
      [key]: value
    })
    console.log(this.state)
  }
  login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(this.state.email, this.state.Password)
      .then((userCredential) => {
        // let user = userCredential.user;
        // console.log("User Signed In: ", user.email);
        // console.log(user.uid)
        alert("Logged in Successfully");
        // window.location.href = "./Loginpage.html";
        // getDataFromWebsite();         
      })
      .catch((error) => {
        console.log(error)
      })
  }

  



  // addItem(){
  //     // console.log("inside Add Item")
  //     // database.ref("users").set(this.state);
  //     const ref = database.ref("users").push();
  //     ref.set(this.state)
  //   }

  render() {
    return (
      <form id="logInform">
        <h2>Birthday Calculator</h2>
        <label for="logInEmail">Email: </label><br />
        <InputField inputType={"email"} inputPlaceholder={"email"} updateState={this.updateState} /><br /><br/>
        <label for="logInPassword">Password: </label><br />
        <InputField inputType={"password"} inputPlaceholder={"Password"} updateState={this.updateState} /><br /><br/>
        <div id="center"><button
          onClick={this.login} id="logInBtn">
          Login
        </button></div>          


      </form>

    )
  }
}
export default LoginForm;
// onClick = {this.addItem}
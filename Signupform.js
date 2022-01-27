import { auth, db } from './Fire.js';
import React from 'react';
import InputField from './Inputfield';
import './Login.css';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "",
            email: "",
            Password: "",
            uid: ""
        }
        this.Signup = this.Signup.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(key, value) {
        console.log('Inside updateSate', key, value)
        this.setState({
            [key]: value
        })
        console.log(this.state)
    }

    // addItem(){
    //     // console.log("inside Add Item")
    //     // database.ref("users").set(this.state);
    //     const ref = db.ref("users").push();
    //     ref.set(this.state)
    //   }
    Signup = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(this.state.email, this.state.Password)
            .then((userCredential) => {
                let user = userCredential.user;
                let userid = user.uid;
                console.log(userid)
                
                this.setState({ uid: userid })
                console.log(this.state.uid)

                this.postToFirebase(this.state)
                console.log(userid)
                console.log(this.postToFirebase)
                // let obj = {
                //     Name: nameInput,
                //     Birthdate: DOBInput,
                //     Email: emailInput,
                //     Password: passwordInput,
                //     UID: userid
                // }
                // console.log('Before call to PostToDatabase')
                // console.log(obj)
                // this.postToFirebase(obj);
            })
            .catch((error) => {
                console.log(error)
            })

    }
    postToFirebase(obj) {
        console.log('inside Post toDatabase')
        db.ref("Users/" + obj.uid).set(obj).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <form id="signUpform">
                <h2>Birthday Calculator</h2>
                <label for="userName">Name: </label><br />
                <InputField inputType={"text"} inputPlaceholder={"name"} updateState={this.updateState} /><br /><br/>
                <label for="datepicker">Birth Date: </label><br />
                <InputField inputType={"date"} inputPlaceholder={"date"} updateState={this.updateState} /><br /><br/>
                <label for="email">Email: </label><br />
                <InputField inputType={"email"} inputPlaceholder={"email"} updateState={this.updateState} /><br /><br/>
                <label for="userPassword">Password: </label><br />
                <InputField inputType={"password"} inputPlaceholder={"Password"} updateState={this.updateState} /><br /><br/>
                <div id="center"><button
                    onClick={this.Signup} id="SignupBtn">
                    Submit
                </button></div>
            </form>
        )
    }
}
export default SignupForm;
// onClick = {this.addItem}
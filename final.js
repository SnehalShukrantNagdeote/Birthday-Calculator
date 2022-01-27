import React from 'react';
import './App.css';
// import "./Login.css"
import { auth, db } from './Fire';
import Home from './Home';
import LoginForm from './Login';
import { getUserData } from './Birthdaymessage';
import Twocomponents from './Register';
// import { getDataFromWebsite } from './Newquote'


// import { getUserData } from './Message';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            quotedata: [],
            quote: "",
            author: "",
            days: ""

        };
    }
    componentDidMount() {
        this.authListener();
        const API = 'https://type.fit/api/quotes'
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    quoteData: data
                }, () => {
                    // add handle click function here, so that a random quote in shown on initial load
                    this.handleClick();
                })
            })
            .catch(error => console.log('Error', error));
    }
    authListener() {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
                console.log("State: Active")
                let uid = user.uid
                console.log(uid)
                getUserData(uid).then((data) => {
                    console.log(data)
                    this.setState({
                        days: data
                    })
                })
                // console.log(data)


            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
                console.log("State: Inactive")
            }
        });
    }
    randomQuote() {
        const randomNumber = Math.floor(Math.random() * this.state.quoteData.length);
        return this.state.quoteData[randomNumber];
    }

    handleClick() {
        const oneRandomQuote = this.randomQuote();
        this.setState({
            quote: oneRandomQuote.text,

            author: oneRandomQuote.author
        })
    }



    render() {
        const quote = this.state.quote
        const author = this.state.author
        const days = this.state.days
        console.log(typeof(data))
        if (this.state.user && isNaN(days)) {
            return (
                <div className="msg">                    
                    <h1>{days}</h1>
                    <h2>"{quote}"</h2>
                    <h3>-{author}</h3>                    
                    <Home />
                </div>
            )
        } else if(this.state.user ){
            return(
                <div className="msg">
                    <h1>{days} days left until your Birthday</h1>
                    <Home />
                </div>
            )
        }
        else {
            return (<Twocomponents />)
        }
        // return (
        //   <div>{this.state.user ? (<Home />) : (<Login />)}</div>
        // )  
    }
}
export default App1;
import React from 'react';
import { auth, db } from './Fire';
import './Login.css'
// import {getUserData} from './birthday'

import './App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    logout = (e) => {
        e.preventDefault();
        auth.signOut();
    }
    render() {
        return (
            <div className="msg">
                <div id="center"><button type="button" class="btn btn-danger my-button" onClick={this.logout} id="logOutBtn">Logout</button></div>
            </div>
        );
    }
}
export default Home;
// {<QuoteBox />
// {<Birthday />} 
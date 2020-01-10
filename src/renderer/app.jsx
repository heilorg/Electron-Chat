import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";
import firebase from "firebase/firebase-browser";

const appRouting = (
    <Router history={hashHistory}>
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="rooms" component={Rooms}>
            <Route path=":roomId" component={Room} />
        </Route>
    </Router>
);

if(!location.hash.length){
    location.hash = "/login";
}

var config = {
    apiKey: "AIzaSyDaXq9ANmXUVh1xBDAvl9L_wQKWiBwcHrg",
    authDomain: "electron-chat-b8191.firebaseapp.com",
    databaseURL: "https://electron-chat-b8191.firebaseio.com",
    projectId: "electron-chat-b8191",
    storageBucket: "electron-chat-b8191.appspot.com",
    messagingSenderId: "622556304922",
    appId: "1:622556304922:web:7d2c229d29ea5a46d463a3",
    measurementId: "G-HW6EPMN8M5"
};
firebase.initializeApp(config);

render(
    appRouting,
    document.getElementById("app")
);
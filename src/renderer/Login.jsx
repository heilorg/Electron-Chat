import React from "react";
import {Link} from "react-router";

export default class Login extends React.Component{
    render(){
        return (
            <div>
                <h2>Login</h2>
                <Link to="/rooms">Login</Link>
                <Link to="/signup">Create New Account</Link>
            </div>
        );
    }
}
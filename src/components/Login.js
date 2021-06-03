import React, { Component } from 'react';
import './Login.css'

export class Login extends Component{
render(){
return(
<section className="loginsection">
<img className="loginlogo" src="Logo.png"></img>
    <div className="logincontainer">
   
        <ul className="loginpad">
    
            <li><input placeholder="Username/Email"></input></li>
            <li><input placeholder="Password"></input></li>
            <li><input className="login" type="button" value="Login"></input><a className="registration " href="#">Registration</a></li>
        </ul>
    </div>
</section>
    )
}
}
import React, { Component } from 'react';

import './Home.css'
import gear from './gear.gif';
import logo from './Logo.gif';
export class Home extends Component{
render(){
return(
<section className="section1">
<img className="logo" src={logo} width="270px"></img>
<img className="img" src={gear} ></img>
    <div className="container1">
        <ul className="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>
</section>
    )
}
}
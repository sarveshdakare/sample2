import React from 'react';
import "./App.css"
import {Link } from 'react-router-dom';

const Nav=()=>{

    return(
<div>
    <ul className='nav-ul'>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/view">View Attendance</Link></li>
       
    </ul>
</div>
    );
}

export default Nav;
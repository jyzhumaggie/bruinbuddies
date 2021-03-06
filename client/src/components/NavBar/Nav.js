import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            {/* <h2>BruinBuddies</h2> */}
            <ul>
                <li className="bruinBuddiesIcon">
                    <Link to="/">BruinBuddies</Link>
                </li>
            </ul>
            <ul>
                
                <li>
                    <Link to="/info">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

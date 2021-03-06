import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const UserNav = () => {
    return (
        <nav>
            {/* <h2>BruinBuddies</h2> */}
            <ul>
                <li className="bruinBuddiesIcon">
                    <Link to="/suggestion">BruinBuddies</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/info">Home</Link>
                </li>
                <li>
                    <Link to="/find">Friends</Link>
                </li>
                <li>
                    <Link to="/personalinfo">MyInfo</Link>
                </li>
                <li>
                    <Link to="/myinfo">MySpace</Link>
                </li>


            </ul>
        </nav>
    )
}

export default UserNav

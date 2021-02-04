import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <span><Link to="/">Home </Link></span>
                <span><Link to="/About">About </Link></span>
            </nav>
        </div>
    )
}

export default NavBar

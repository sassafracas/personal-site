import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render() {
        return(
            <div>
                <div>
                    <Link to="/">Home</Link> <Link to="/about">About Me</Link> <Link to="/portfolio">Portfolio</Link>
                </div>
            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render() {
        return(
            <div>
                <div className="footer">
                    <Link to="/">Home</Link> <Link to="/about">About Me</Link> <Link to="/portfolio">Portfolio</Link>
                </div>
            </div>
        )
    }
}

export default Footer;
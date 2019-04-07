import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return(
            <div className='error-container'>
                <div className='error-container__text'>The page you're looking for doesn't exist.</div>
                <Link className="link" to="/" >&larr; Back To Home</Link>
            </div>
        )
    }
}

export default NotFound;
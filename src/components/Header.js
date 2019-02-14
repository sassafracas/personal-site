import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { open, close } from '../actions/isOpen';

class Header extends Component {
    
    render() {
        return(
            <div>
            { this.props.isOpen ?
                <div className="header">
                    <Link to="/" onClick={this.props.close}>Home</Link> <Link to="/about">About Me</Link> <Link to="/portfolio">Portfolio</Link>
                </div> : null
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isOpen: state.isOpen,
  })

const mapDispatchToProps = dispatch => ({
    open: () => dispatch(open()),
    close: () => dispatch(close()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
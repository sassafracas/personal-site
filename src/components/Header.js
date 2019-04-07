import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { open, close } from '../actions/isOpen';

class Header extends Component {
    
    render() {
        return(
            <div>
            { this.props.isOpen && this.props.router.location.pathname !== '/' ?
                <div className="header">
                    <Link className="link__header" to="/" onClick={this.props.close}>Home</Link> <Link className="link__header" to="/about">About Me</Link> <Link className="link__header" to="/portfolio">Portfolio</Link>
                </div> : null
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isOpen: state.isOpen,
    router: state.router
  })

const mapDispatchToProps = dispatch => ({
    open: () => dispatch(open()),
    close: () => dispatch(close()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
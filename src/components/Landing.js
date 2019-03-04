import React, { Component } from 'react';
import me from '../assets/me.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { open, close } from '../actions/isOpen';

class Landing extends Component {
    render() {
        return(
            <div className="center-container">
                <img src={me} className="me-photo" alt="me"></img>
                <div className="center-container__link-item">
                    <Link className="link" to="/about" onClick={this.props.open}>About Me</Link>
                    <a className="link" href="#">Github</a>
                    <a className="link" href="#">LinkedIn</a>
                    <a className="link" href="#">Resume</a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
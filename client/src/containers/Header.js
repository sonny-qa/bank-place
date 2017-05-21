import React from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router';
import * as Actions from '../actions';

class Header extends React.Component {
	handleSignout() {
		this.props.signOutUser();
	}
	renderAuthLinks(){
		if (this.props.authenticated) {
			return [
			<li className='nav-item' key={2}>
				<Link className='nav-link' to='/signup'><b>Register</b></Link>
			</li>

			]
		} else {
			return [

			<li className='nav-item' key={2}>
				<Link className='nav-link' to='/signup'><b>Register</b></Link>
			</li>

			]
		}
	}
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to='/'><b>Bank Place Wilmslow</b></Link>
					</div>
					<ul className="nav navbar-nav navbar-right">
						{this.renderAuthLinks()}
					</ul>
				</div>
			</nav>
			)
	}
}

//this is a container, so it needs to be connected to the store
//add function to allow state to be passed to the Header container

function mapStateToProps(state){
	return {
		authenticated: state.auth.authenticated
	}
}

export default connect(mapStateToProps,Actions)(Header)
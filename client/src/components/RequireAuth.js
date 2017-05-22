import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


//export a function that takes a component as an argument

//componentwillmount is a lifecycle method that runs automatically when a component is just about to 
// be rendered - we hook into this to check the autheniciation state at this point just before rendering

//if user is authenticated then return the wrapped component originally fed in as argument
export default function(WrappedComponent) {
	class Auth extends React.Component {
		componentWillMount() {
			if (!this.props.authenticated){
				browserHistory.push('/signup');
			}
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}


//allow the component to access authenticated on props by mapping part of the state to it
function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated}
}

return connect(mapStateToProps)(Auth)

}
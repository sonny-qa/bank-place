import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const validate = values => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Please enter an email'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	if (!values.password) {
		errors.password = 'Please enter a password'
	}

	if (!values.passwordConfirmation) {
		errors.passwordConfirmation = "Please enter a password confirmation.";
	}

	if (values.password !== values.passwordConfirmation) {
		errors.password = 'Passwords do not match'
	}

	if (values.ApartmentNumber > 19 || values.ApartmentNumber ==13) {
		errors.ApartmentNumber = 'Not a Bank Place Apartment'
	}

	return errors;
}


class Signup extends React.Component {
	handleFormSubmit = (values)=> {
		console.log('these are the values...',JSON.stringify(values))
		
		//fire the signInUser action creator, passing along payload of form values


		function handleErrors(response) {
    		if (!response.ok) {
        throw Error(response.statusText);
    		}
    		
    		return response;
		}
		
		fetch('http://localhost:3001/register',{method: "post", 
				headers : {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)})
		.then(handleErrors)
    	.then(response => { this.props.signInUser(); console.log(response.status) })
    	.catch(error => {this.props.signOutUser(); window.alert('sorry error'); console.log(error,'there was error') });
		

		// new Promise((resolve,reject) => {
		// 	fetch('http://localhost:3001/register',{method: "post", 
		// 		headers : {
		// 			'Accept': 'application/json',
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify(values)})
		// 	.then(handleErrors)
		// 	.then(response)
		// })
	};

	renderField = ({ input, label, type, meta: {touched, error}}) => (

		<fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
			 <label className="control-label">{label}</label>
			<div>
				<input {...input} placeholder={label} className='form-control' type={type}/>
				 {touched && error && <div className="help-block">{error}</div>}
			</div>
		</fieldset>
		);

	render () {
		return (
			<div className='container'>
				<div className='col-md-6 col-md-offset-3'>
					<h2 className='text-center'> Register</h2>
					<form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
						<Field name='First_Name' type='text' component={this.renderField} label='First Name'/>
						<Field name='Last_Name' type='text' component={this.renderField} label='Last Name'/>
						<Field name='ApartmentNumber' type='number' component={this.renderField} label='Apartment Number'/>
						<label className="control-label">Address</label>
						<Field name='ContactAddress' type='text' component='textarea' className='form-control' label='Address'/>
						<Field name='email' type='text' component={this.renderField} label='Email'/>
						
						
						<button action='submit' className='btn btn-primary'> Register</button>
						
					</form>
				</div>
			</div>
			)
	}
}


export default connect (null, Actions)(reduxForm({
	form: 'signup',
	validate
})(Signup))


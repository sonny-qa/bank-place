import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import { Button, Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';
const imgUrl = require('./img/main.jpg')

class App extends Component {
  render(){

    
    console.log(imgUrl)
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container} />
      
        <Route path='/register' component={form_container}>
          <IndexRoute component={Register}/>
        </Route>
               
        <Route path='*' component={Notfound} />
       
      </Router>)
  }
}


const Register = React.createClass ({

  

getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const val = this.state.value;
    
    if (val < 20 && val >0) return 'success';
    else if (val >19) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },


  render() {
    return (
      <form>
        <FormGroup controlId="first_name">
          <ControlLabel>First Name</ControlLabel>
          <FormControl type="text" placeholder="First Name" />
        </FormGroup>
        <FormGroup controlId="last_name">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl type="text" placeholder="Last Name" />
        </FormGroup>


        <FormGroup controlId="apt_no" validationState={this.getValidationState()}>
          <ControlLabel>Bank Place Apartment Number</ControlLabel>
          <FormControl  value={this.state.value} onChange={this.handleChange} type="number" placeholder="Enter number" />
          <FormControl.Feedback/>
        </FormGroup>
        
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl type="text" placeholder="Email" />
        </FormGroup>
        
          <FormGroup controlId="address">
          <ControlLabel>Contact Address</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Address" />
        </FormGroup>

      

        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
})







const form_container =(props) => (
 <div className='reg-form'>
 <h3>Register</h3>
  <div className='text-left'>
 <p>If you are a leasholder please complete the form to gain access to the forum. We will normally grant access within a few working days </p>

 
 </div>
   {props.children}
   
 </div>) 

const Notfound = () => <h1>Page not found....</h1>

const Nav = () => (
  <div>
    <Link to='/'>Home </Link>&nbsp;

  </div>
  )

//any routes wrapped within this 'Container' route 
//will be accessible via props.children, 
//e.g. Home, Address and Notfound are props.children
//react router deciedes which one of these UI elements to render
const Container = (props) => (

  <Grid>
    <Row className='Show-grid'>
      <Col xs={12} md={12}><div className='text-center'><b><h3 > Bank Place Wilmslow Forum</h3></b></div></Col>
    </Row>

     <Row className='Show-grid'>
      <Col xs={12} md={12}><div className='text-center'><p >This forum is for leaseholders of apartments in Bank Place Wilmslow to discuss any issues. <br/> <br/> Please register your details for access</p></div></Col>
    </Row>

    
     <Row className='Show-grid'>
      <Col xs={12} md={12}><div className='text-center'><img src={imgUrl} alt=""/></div></Col>
      <Col xs={12} md={12}><div className='text-center'><br/></div></Col>
    </Row>

     <Row className="show-grid">
      <Col xs={3} md={3}></Col>
       <Col xs={3} md={3}><div className='text-center'><Button bsStyle="success" href='/register'>Register</Button></div></Col>
        <Col xs={3} md={3}><div className='text-center'><Button bsStyle="primary" href='https://groups.google.com/d/forum/bank-place-apartments-wilmslow'>Login</Button></div></Col>
        <Col xs={3} md={3}></Col>
    </Row>
     {props.children}   
  </Grid>
  

)
export default App


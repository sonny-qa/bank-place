import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import { Button, Grid, Row, Col } from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';
const imgUrl = require('./img/main.jpg')

class App extends Component {
  render(){

    
    console.log(imgUrl)
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container} >
          <IndexRoute component={Home}/>
            
              
          <Route path='*' component={Notfound} />
        </Route>
      </Router>)
  }
}







const Home = () => <h1>Welcome to Bank Place Leaseholder forum!</h1>




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
      <Col xs={12} md={12}><div className='text-center'><h2 >Bank Place Wilmslow Forum</h2></div></Col>
    </Row>

     <Row className='Show-grid'>
      <Col xs={12} md={12}><div className='text-center'><h4 >This forum is for leaseholders of apartments in Bank Place Wilmslow to discuss any issues. <br/> <br/> Please register your details for access</h4></div></Col>
    </Row>

    
     <Row className='Show-grid'>
      <Col xs={12} md={12}><div className='text-center'><img src={imgUrl} alt=""/></div></Col>
      <Col xs={12} md={12}><div className='text-center'><br/></div></Col>
    </Row>

     <Row className="show-grid">
      <Col xs={3} md={3}></Col>
       <Col xs={3} md={3}><div className='text-center'><Button bsStyle="success">Register</Button></div></Col>
        <Col xs={3} md={3}><div className='text-center'><Button bsStyle="danger">Login</Button></div></Col>
        <Col xs={3} md={3}></Col>
    </Row>
        
  </Grid>

)
export default App


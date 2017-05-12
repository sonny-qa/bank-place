import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container} >
          <IndexRoute component={Home}/>
          <Route path='/address' component={Address} />
          <Route path='*' component={Notfound} />
        </Route>
      </Router>)
  }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>


const Notfound = () => <h1>Page not found....</h1>

const Nav = () => (
  <div>
    <Link to='/'>Home </Link>&nbsp;
    <Link to='/address'>Address </Link>
  </div>
  )

//any routes wrapped within this 'Container' route 
//will be accessible via props.children, 
//e.g. Home, Address and Notfound are props.children
//react router deciedes which one of these UI elements to render
const Container = (props) => 
  <div>
  <Nav/>
  {props.children}
  </div>

export default App
// class App extends Component {
//    constructor(props) {
//     super(props);
//     this.state = {cities:[]}
//   }



//     async componentDidMount() {
//       try {
//         let response = await fetch('/cities')
//         let responseJson = await response.json();

//         this.setState({cities:responseJson})
//       } catch(error){
//         console.log(error)
//       }
//     }


//   render() {
//     return (
//         <div>
//         <p> Good Morn </p> 
//         <ul>
//           {this.state.cities.map( city => {
//             return <li key={city.name}> <b>{city.name}</b>: {city.population} </li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

//export default App;



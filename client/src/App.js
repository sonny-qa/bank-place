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
            <Route path='/address' component={Address} >
              <IndexRoute component={twitter_feed}/>
              <Route path='instagram' component={instagram}/>
              <Route path='query' component={Query}/>
            </Route>
            <Route path='/NamedComponent' component={NamedComponents}>
              <IndexRoute components={{title:Title2, subTitle:subTitle}}/> 
            </Route>
            <Route path='/about/(:name)' component={About}/>
          <Route path='*' component={Notfound} />
        </Route>
      </Router>)
  }
}

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
  )

const About = (props) => (
  <div>
    <h3>Welcome to the about page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>)

const NamedComponents = (props) => (
  <div>
    {props.title} <br/>
    {props.subTitle}
  </div>)

const Title2 = () => (
  <h1>Hello from title component</h1>
  )

const subTitle = () => (
  <h1>Hello from subtitle component</h1>)

const Home = () => <h1>Hello from Home!</h1>
const Address = (props) => 
  <div>
    <br />
    <Link to='/address'>Twitter Feed</Link>
    <Link to='/address/instagram'> Instagram feed</Link>
    <h1>We are still located in the US</h1>
    {props.children}
  </div>

const instagram = () => <h3> Instagram feed </h3>
const twitter_feed = () => <h3> twitter feed </h3>

const Notfound = () => <h1>Page not found....</h1>

const Nav = () => (
  <div>
    <Link to='/'>Home </Link>&nbsp;
    <Link to='/address'>Address </Link>
    <Link to='/NamedComponent'>Named components</Link>
    <Link to={{
                pathname: '/address/query',
                query: {message: 'Hello from route query'} 
              }}>Route query</Link>
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



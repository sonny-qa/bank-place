import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {cities:[]}
  }


    async componentDidMount() {
    const response = await fetch('/cities', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    const cities = await response.json()

    this.setState({cities: cities})
  }

  render() {
    return (
        <div>
        <p> hello </p> 
        <ul>
          {this.state.cities.map( city => {
            return <li key={city.name}> <b>{city.name}</b>: {city.population} </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {cities:[]}
//   }


//   async componentDidMount() {
//     const response = await fetch('/cities')
//     const cities = await response.json()

//     this.setState({cities: cities})
//   }

//   render(){
//     return (
//       <div> 
//         <ul>
//           {this.state.cities.map( city => {
//             return <li key={city.name}> <b>{city.name}</b>: {city.population} </li>
//           })}
//         </ul>
//       </div>
//       );
//   }
// }

// export default App;
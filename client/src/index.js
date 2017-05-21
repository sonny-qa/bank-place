
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Favorites from './containers/Favorites'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import RequireAuth from './components/RequireAuth'




const store = configureStore();

//App is our parent component tied to the /
//App renders whenever / is in the URL - e.g. always
//however, we also want to render the Home component when 
//at the URL / - this is why indexroute is used

//the other three routes refer to view which are rendered when 
// the path matches, via this.props.children

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='signup' component={Signup}/>
				<Route path='login' component={Login}/>
				<Route path='favorites' component={RequireAuth(Favorites)}/>	
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')

	);
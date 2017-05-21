import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import '../styles/app.css'
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';

//redux terminology
//containers - connect to state
//components are just dumb


//note: onTermChange is a callback because the action being triggered requires an argument (selectedGif)
// the argument, selectedGif comes all the way up from GifItem
class Home extends React.Component {
	render() {
		return(
			<div>

			</div>
			)
	}
}

//<SearchBar onTermChange={this.props.actions.requestGifs}/>

//<GifList gifs={ this.props.gifs } onGifSelect={selectedGif => this.props.actions.openModal({selectedGif})}/>
//<GifModal modalIsOpen={ this.props.modalIsOpen} selectedGif= {this.props.selectedGif} onRequestClose={ ()=> this.props.actions.closeModal() }/>
//this returns a plain object, this becomes available
//on the connected component, (App in this case), as 
// this.props.gifs

//the function links the gifs from the GifsReducer to 
//this.props.gifs on the App component 
// -->links up reducer and allows containers to access
//     state via props 

//it passes data TO the container, from store, via reducers
function mapStateToProps(state) {
	return {
		gifs: state.gifs.data,
		selectedGif: state.modal.selectedGif,
		modalIsOpen: state.modal.modalIsOpen
	}
}

//this is to pass data FROM the container to the store
//to do this, it adds action creators to a container, as props

// bindcreators method sets this.props.actions on the App container
// it wraps 'Actions' in a dispatch call so they can be invoked by the container

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions,dispatch)
	}
}

//this allows the App component to subscribe to the store
//whenever the store changes, mapStateToProps is called
// we export the 'redux-connected App component'
export default connect(mapStateToProps, mapDispatchToProps)(Home)
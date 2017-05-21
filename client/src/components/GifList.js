
import React from 'react';
import GifItem from './GifItem';

//a stateless functional component
//use this when we we have a component that does not need to track or modify state
//the App (parent component) passes in the data needed via props

const GifList = (props) => {
	const gifItems = props.gifs.map((image) => {
		return <GifItem key={image.id} gif={image} 
		onGifSelect={props.onGifSelect}/>
	});

	return (
		<div className="gif-list">{gifItems}</div>
		)
}

export default GifList;
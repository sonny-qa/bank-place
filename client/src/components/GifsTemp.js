import React from 'react';


//note this syntax ({gifs}) expects an object with a gifs property
//to be passed in. then instead of doing, object.gifs 
//we can just do gifs directly
const GifsTemp = ({gifs}) => {
	const gifItems = gifs.map((gif) =>{
		return (
			<li key={gif.id}><img src={gif.url} /></li>
			)
	})
	return (
		<ul className='gif-list'>{gifItems}</ul>
		)
}

export default GifsTemp;
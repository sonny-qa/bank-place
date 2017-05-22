import React from 'react';

const GifItem = ({gif,onGifSelect}) => {
	//pass in onGifSelect as arg so that we can access it directly 
	return (
		<div className="gif-item" onClick={() => onGifSelect(gif)}>
			<img src={gif.images.downsized.url} />
		</div>
		)
}
export default GifItem;
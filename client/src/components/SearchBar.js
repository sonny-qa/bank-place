import React from 'react';

class SearchBar extends React.Component {

	onInputChange(term){ 
		
		//here we are calling the parent onTermChange method, 
		//this allows the parent component to update the console or whatever
		this.props.onTermChange(term);
	}

  render() {
    return (
    	//use className for html classes
      <div className='search'>
      	<input onChange={event => this.onInputChange(event.target.value)} />
        
      </div>
    );
  }
}

export default SearchBar;
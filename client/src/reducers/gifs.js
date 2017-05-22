import { REQUEST_GIFS } from '../actions';

const initialState = {
  data : []
}

//this is just the bit of state that this
// reducer is responsible for 


//actions given in argument, refers to all actions being dispatched
// throughout the application 
export default function gifs(state=initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
   
      return {
        ...state, data: action.payload.body.data
      };
      default:
        return state;
  }
}
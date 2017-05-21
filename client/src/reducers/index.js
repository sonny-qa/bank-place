import { combineReducers } from 'redux';
import GifsReducer from './gifs'
import ModalReducer from './modal'
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';



//the key is the piece of the state - 'gifs' in this case
//the value is the reducer (specifically what the reducer returns) - 'GifsReducer' 
const rootReducer = combineReducers({
	gifs: GifsReducer,
	modal: ModalReducer,
	form: FormReducer,
	auth: AuthReducer,
});



export default rootReducer;
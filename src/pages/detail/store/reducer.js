import { fromJS } from 'immutable';
import * as  constants from  './constants';
const defaultState = fromJS({
	topDisabled:false
})

export  default (state = defaultState,action) => {
	
	switch (action.type){
		case constants.CHNANGE_TOP_SHOW:
			return state.set('topDisabled',true);
		case constants.CHNANGE_TOP_HIDE:
			return state.set('topDisabled',false)
		default:
			return state;
	}
	
}
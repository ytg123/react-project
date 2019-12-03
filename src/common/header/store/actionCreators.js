import * as  constants from  './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export const searchFocus = () => ({
	type:constants.SEARCH_FOCUS
});

export const serachFlur = () => ({
	type:constants.SEARCH_BLUR
});

const changeList = (data) => ({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/2)
});

export const mouseHEnter = () => ({
	type:constants.MOUSE_ENTER
});

export const mouseHLeave = () => ({
	type:constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type:constants.CHANGE_PAGE,
	page
});
export const getHeaderList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res)=>{
			dispatch(changeList(res.data.data))
		}).catch((e)=>{
			console.log(e)
		})
	}
	
};
import { combineReducers } from 'redux';

const initialState = {
	isToggleName: false,
	sum: null
}

function themeReducer(state = initialState, action) {
	return state;
}

export const rootReducer = combineReducers({
	theme: themeReducer
})

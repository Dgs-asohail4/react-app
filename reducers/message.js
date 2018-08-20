import { SET_MESSAGE, SEND_MESSAGE } from '../types/message';
const initState = {
	message: '',
	messages : []
}

export default (state = initState, action) => {
	switch(action.type) {
		case SET_MESSAGE :
			return {...state, message: action.payload.message}
			break;
		case SEND_MESSAGE:
			return {...state, messages: [...state.messages, action.payload.message]}
			break;
		default :
			return state
	}
}
import { SET_MESSAGE } from '../types/message';
import { SEND_MESSAGE } from '../types/message';
export const setMessage = (message) => {
	return dispatch => {
		dispatch({
			type: SET_MESSAGE,
			payload: {
				message
			}
		})
	}
}


export const sendMessage = (message) => {
	return dispatch => {
		dispatch({
			type: SEND_MESSAGE,
			payload: {
				message: {text:message}
			}
		})
	}
}
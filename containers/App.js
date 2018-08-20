import React, {Component} from 'react';

import InputPreview from '../components/InputPreview';

import {connect} from 'react-redux';

import {setMessage, sendMessage} from '../actions/message';


import {Link} from 'react-router-dom';
import ChatList from './chatlist'
class App extends Component {
	_onChange = (value) => {
		this.props.dispatch(setMessage(value))
	}
	_onSend = () => {
		this.props.dispatch(sendMessage(this.props.messageReducer.message))
		this.props.dispatch(setMessage(''))
	}


	render () {
		const {message} = this.props.messageReducer;
		return (
			<div className="container">
				<ChatList/>
				<InputPreview value = {message} onChange={this._onChange} onSend={this._onSend}/>
			</div>
		)
	}
}

export default connect(state => state)(App);
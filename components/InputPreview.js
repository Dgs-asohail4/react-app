import React from 'react';
export default class InputPreview extends React.Component {
	render () {
		return (
			<div>
				<input type="text" className="form-group" value = {this.props.value} onChange={e => this.props.onChange(e.target.value)}/>
				<input type="submit" className="form-group" value = 'Send' onClick={e=>this.props.onSend()}/>
			</div>
		)
	}
}
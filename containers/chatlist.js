import React from 'react';
import {connect} from 'react-redux';
class ChatList extends React.Component {

    constructor(props){
        super(props);

        console.log(this.props);
    }
	render () {
		return (
            <div>
            {this.props.messageReducer.messages.map(message => {
                return (
                    <div class="container">
                    <p>{message.text}</p>
                    <span class="time-right">11:00</span>
                    </div>
                )
            })}
            </div>
		)
	}
}


export default connect(state => state)(ChatList);
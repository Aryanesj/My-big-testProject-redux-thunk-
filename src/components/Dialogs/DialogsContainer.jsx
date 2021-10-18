import React from 'react';
import Dialogs from './Dialogs.jsx';
import {sendMessageCreator} from '../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect.js';
import {compose} from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
		};
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		}
	}
}


// let AuthRedirectComponent = WithAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
	connect(mapStateToProps, mapDispatchToProps), 
	WithAuthRedirect
	)(Dialogs);
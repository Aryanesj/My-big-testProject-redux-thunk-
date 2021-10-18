import React from 'react';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect.js';
import {compose} from 'redux';
import {getStatus} from '../../redux/profile-reducer.js';
import {updateStatus} from '../../redux/profile-reducer.js';


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId || 8;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
	return(
<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
	)
  }
}



let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	// WithAuthRedirect
	)(ProfileContainer);
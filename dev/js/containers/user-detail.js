import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    // when the application loads, user is null in state
    if (!this.props.user) {
      return (
        <h3>Select a user</h3>
      );
    }
    // returned if user is selected
    return (
      <div>
        <h3>{this.props.user.first} {this.props.user.last}</h3>
        <p>
          <strong>Age: {this.props.user.age}</strong><br />
          {this.props.user.description}
        </p>
      </div>
    )
  }
}

// makes component subscribe to the Redux store updates
function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);

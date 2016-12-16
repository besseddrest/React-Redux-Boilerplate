import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {
  // maps over each item in UserList
  createListItems() {
    return this.props.users.map((user) => {
      return (
          <li
            key={user.id}
            onClick={() => this.props.selectUser(user)}
          >
            {user.first} {user.last}
          </li>
      );
    });
  } // createListItems

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  } // render
}

// makes component subscribe to the Redux store updates
function mapStateToProps(state) {
  return {
    users: state.users
  }
}

// merges the action creator into the component's props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

// connect() creates the container fetches app state data and uses it to render components
export default connect(mapStateToProps, mapDispatchToProps)(UserList);

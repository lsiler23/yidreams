import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../ducks/session_duck';

class HomeHeader extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <header class='home-page-header'>
        <h1> {`${this.props.username}'s dreams`} </h1>
        <input
          type='submit'
          value='byeeeee'
          onClick={this.handleLogout} />
      </header>
    )
  }
}

export default connect(null, { logout })(HomeHeader);

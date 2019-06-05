import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../ducks/session_duck';

class HomeHeader extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  handleExport() {
    this.props.exportDreams();
  }

  render() {
    return (
      <header class='home-page-header'>
        <h1> {`${this.props.username}'s dreams`} </h1>
        <div>
          <a href='/dreams/import_area'> { 'take me to import!' } </a>
          <a href='/dreams/export'> { 'export!' } </a>
          <input
            type='submit'
            value='byeeeee'
            onClick={this.handleLogout} />
        </div>
      </header>
    )
  }
}

export default connect(null, { logout })(HomeHeader);

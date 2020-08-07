import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import HomeHeader from './home_header';
import SelfDreamsBody from './self_dreams/self_dreams_body';
import OtherDreamsBody from './other_dreams_body';

class HomePage extends Component {
  renderFriendTabs() {
    const { friends } = this.props;

    friends.map((friend) => return (
      <Tab eventKey={`${friend.username}-tab`} title={`${friend.username}'s`}>
        <OtherDreamsBody />
      </Tab>
    ));
  }

  render() {
    const { currentUser: { username } } = this.props;

    return (
      <Fragment>
        <HomeHeader username={username} />
        <Tabs defaultKey='self-dreams' id='dreams-tabs'>
          <Tab eventKey='self-dreams' title="Yours">
            <SelfDreamsBody />
          </Tab>
          { this.renderFriendTabs() }
        </Tabs>
      </Fragment>
    )
  }
}

const msp = state => ({ currentUser: state.session.currentUser || {}, friends: state.users.friends || [] });
export default connect(msp)(HomePage);

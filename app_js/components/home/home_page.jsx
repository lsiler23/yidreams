import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import HomeHeader from './home_header';
import SelfDreamsBody from './self_dreams/self_dreams_body';
import OtherDreamsBody from './other_dreams_body';

class HomePage extends Component {
  render() {
    const { currentUser: { username } } = this.props;
    const otherTab = username === 'laurette' ? "Yi's" : "Laurette's"

    return (
      <Fragment>
        <HomeHeader username={username} />
        <Tabs defaultKey='self-dreams' id='dreams-tabs'>
          <Tab eventKey='self-dreams' title="Yours">
            <SelfDreamsBody />
          </Tab>
          <Tab eventKey='their-dreams' title={otherTab}>
            <OtherDreamsBody />
          </Tab>
        </Tabs>
      </Fragment>
    )
  }
}

const msp = state => ({ currentUser: state.session.currentUser || {}});
export default connect(msp)(HomePage);

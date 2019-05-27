import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SelfDreamsBody from './self_dreams/self_dreams_body';

class HomePage extends Component {
  render() {
    return (
      <Tabs defaultKey='self-dreams' id='dreams-tabs'>
        <Tab eventKey='self-dreams' title="Yours">
          <SelfDreamsBody />
        </Tab>
        <Tab eventKey='their-dreams' title="Yi's">
          <h1>SUP BB</h1>
        </Tab>
      </Tabs>
    )
  }
}

const msp = state => ({ currentUser: state.session.currentUser || {}});
export default connect(msp)(HomePage);

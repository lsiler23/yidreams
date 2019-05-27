import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SelfDreamsBody from './self_dreams/self_dreams_body';
import HomeHeader from './home_header';

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
            <h1>SUP BB</h1>
          </Tab>
        </Tabs>
      </Fragment>
    )
  }
}

const msp = state => ({ currentUser: state.session.currentUser || {}});
export default connect(msp)(HomePage);

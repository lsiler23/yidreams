import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import DreamsTable from '../dreams_table';
import CreateDreamSection from './create_dream_section';

class SelfDreamsBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CreateDreamSection />
        <DreamsTable dreams={this.props.currentUserDreams} />
      </Fragment>
    )
  }
}

const msp = state => ({ currentUserDreams: state.dreams || [] });
export default connect(msp)(SelfDreamsBody);

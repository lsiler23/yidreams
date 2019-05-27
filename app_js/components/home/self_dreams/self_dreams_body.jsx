import React, { Component } from 'react';
import { connect } from 'react-redux';

import DreamsTable from '../dreams_table';

class SelfDreamsBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DreamsTable dreams={this.props.currentUserDreams} />
    )
  }
}

const msp = state => ({ currentUserDreams: state.dreams || [] });
export default connect(msp)(SelfDreamsBody);

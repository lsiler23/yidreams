import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import DreamsTable from '../dreams_table';
import CreateDreamSection from './create_dream_section';

class SelfDreamsBody extends Component {
  constructor(props) {
    super(props);
  }

  renderTableOrMessage() {
    const { currentUserDreams } = this.props;

    if (currentUserDreams.length) {
      return <DreamsTable dreams={this.props.currentUserDreams} />
    } else {
      return (
        <div class='zero-state'>
          no dreams yet!!!! go 2 slep!!
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <CreateDreamSection />
        { this.renderTableOrMessage() }
      </Fragment>
    )
  }
}

const msp = state => ({ currentUserDreams: state.dreams || [] });
export default connect(msp)(SelfDreamsBody);

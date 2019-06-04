import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import DreamsTable from '../dreams_table';
import CreateDreamSection from './create_dream_section';
import DreamSearch from '../dream_search';

class SelfDreamsBody extends Component {
  constructor(props) {
    super(props);
  }

  renderTableOrMessage() {
    const { currentUserDreams } = this.props;

    if (currentUserDreams.length) {
      return <DreamsTable dreams={currentUserDreams} />
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
        <DreamSearch />
        { this.renderTableOrMessage() }
      </Fragment>
    )
  }
}

const msp = state => ({ currentUserDreams: state.dreams.currentUserDreams || [] });
export default connect(msp)(SelfDreamsBody);

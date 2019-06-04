import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllOtherDreams } from '../../ducks/dream_duck';

import DreamsTable from './dreams_table';

class OtherDreamsBody extends Component {
  constructor(props) {
    super(props);

    this.renderTableOrMessage = this.renderTableOrMessage.bind(this);
  }

  componentDidMount() {
    this.props.getAllOtherDreams();
  }

  renderTableOrMessage() {
    const { otherUserDreams } = this.props;

    if (otherUserDreams.length) {
      return <DreamsTable dreams={otherUserDreams} />
    } else {
      return (
        <div className='zero-state'>
          no dreams around!!!
        </div>
      )
    }
  }

  render() {
    return (this.renderTableOrMessage());
  }
}

const msp = (state) => ({ otherUserDreams: state.dreams.otherUserDreams || [] });

export default connect(msp, { getAllOtherDreams })(OtherDreamsBody);

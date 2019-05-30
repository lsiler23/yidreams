import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateDream } from '../../ducks/dream_duck';
import { showModal } from '../../ducks/modal_duck';

class DreamRowBody extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.showModal(this.props.dream);
  }

  render() {
    const { body } = this.props.dream;
    return (
      <td onClick={this.handleClick}> { body } </td>
    );
  }
}

export default connect(null, { updateDream, showModal })(DreamRowBody);

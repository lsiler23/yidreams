import React, { Component } from 'react';
import { connect } from 'react-redux';

import { queryDreams } from '../../ducks/dream_duck';

class DreamSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { queryDreams } = this.props;

    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }

    this.setState({ query: e.currentTarget.value }, () => {
      this.timeOut = setTimeout(() => queryDreams(this.state.query), 300)
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Find or start a channel'
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default connect(null, { queryDreams })(DreamSearch);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { queryDreams } from '../../ducks/dream_duck';

class DreamSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '', hasChanged: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {    
    const { queryDreams } = this.props;

    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }

    this.setState({ hasChanged: true, query: e.currentTarget.value }, () => {
      this.timeOut = setTimeout(() => queryDreams(this.state.query), 300)
    });
  }

  render() {
    return (
      <div>
        <input
          className='search-bar'
          type='text'
          placeholder='Look 4 a dream maybe!'
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default connect(null, { queryDreams })(DreamSearch);

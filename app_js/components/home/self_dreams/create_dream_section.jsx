import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createDream } from '../../../ducks/dream_duck';

class CreateDreamSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dreamBody: '',
      isPrivate: false,
      errorClass: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dreamBody, isPrivate } = this.state;
    if (dreamBody === '') {
      this.setState({ errorClass: 'error' });
      return;
    };

    this.props.createDream({ body: dreamBody, is_private: isPrivate });
    this.setState({ errorClass: '', dreamBody: '' });
  }

  onChange(e) {
    const { target } = e;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    const validationError = this.state.errorClass;
    const placeholder = validationError === '' ? 'tell me yr dreams' : 'um what r u doin? write something!';

    return(
      <form onSubmit={this.handleSubmit}>
        <label id='create-dream-title'> wha hapn last night </label>
        <textarea
          name='dreamBody'
          class={`dream-text ${validationError}`}
          value={this.state.dreamBody}
          onChange={this.onChange}
          placeholder={placeholder} />
        <label id='privacy'> want some privacy?
          <input
            name='isPrivate'
            type='checkbox'
            checked={this.state.isPrivate}
            onChange={this.onChange} />
        </label>
        <input type='submit' value='Enter'/>
      </form>
    )
  }
}

export default connect(null, { createDream })(CreateDreamSection);

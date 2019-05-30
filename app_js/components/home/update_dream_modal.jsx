import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateDream } from '../../ducks/dream_duck';
import { closeModal } from '../../ducks/modal_duck';

class UpdateDreamModal extends Component {
  constructor(props) {
    super(props);

    this.state = { body: '', isPrivate: false };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
  }

  onChange(e) {
    const { target } = e;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { body, isPrivate } = this.state;
    const { updateDream, closeModal, details } = this.props;

    this.props.updateDream({
      body,
      is_private: isPrivate,
      id: details.id
    });
    this.props.closeModal();
  }

  handleQuit() {
    this.props.closeModal();
  }

  render() {
    const { details } = this.props;
    const isOpen = Object.keys(details).length > 0;

    if (isOpen) {
      return (
        <div className='modal-background'>
          <div className='modal-child'>
            <form onSubmit={this.handleSubmit}>
              <h1>update yr dream</h1>
              <textarea onChange={this.onChange} name='body'>
                { details.body }
              </textarea>
              <label>change privacy??
                <input
                  name='isPrivate'
                  type='checkbox'
                  onChange={this.onChange}
                  defaultChecked={details.is_private} />
              </label>
              <button type='submit'>
                ship it 2 the cloud lol jk
              </button>
              <button className='back-button' onClick={this.handleQuit}>
                go back!!!
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const msp = state => ({
  details: state.modal.details || {}
});

export default connect(msp, { updateDream, closeModal })(UpdateDreamModal);

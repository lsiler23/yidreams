import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    const { type } = this.props;
    const otherType = (type === 'Log In' ? '/signup' : '/login');
    const linkText = (type === 'Log In' ? 'sign up' : 'log in');

    return (
      <div className='auth-page'>
        <div className='auth-form-box'>
          <h3 className='auth-form-title'> {type} </h3>
            <form
              onSubmit={this.handleSubmit}
              className='auth-form'>
              <div className='auth-section'>
                <input
                  onChange={this.handleChange('username')}
                  type='text'
                  value={this.state.username}
                  placeholder='username'/>
              </div>
              <div className='auth-section'>
                <input
                  onChange={this.handleChange('password')}
                  type='password'
                  value={this.state.password}
                  placeholder='password'/>
              </div>
              <button className='auth-button'> {type} </button>
            </form>
            <div className='auth-redirect'>
              <span>Need to <Link to={otherType}> {linkText} </Link> instead? </span>
            </div>
        </div>
      </div>
    );
  }
}

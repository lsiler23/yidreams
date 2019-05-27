import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form';
import { signup } from '../../ducks/session_duck';

export default withRouter(
  connect((state) => ({ type: 'Sign Up'}), { signup })(SessionForm)
);


import PropTypes from 'prop-types';

function UserGreeding (props) {

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

  const loginPrompt = <h2 className="login-prompt">Please log in</h2>;

  return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeding.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

UserGreeding.defaultProps = {
  isLoggedIn: false,
  username: 'Guest',
}

export default UserGreeding
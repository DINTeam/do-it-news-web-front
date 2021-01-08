import PropTypes from 'prop-types';

import withAuthentication from '../../components/withAuthentication';

const AuthTestPage = props => {
  const { stateSignIn } = props;

  return (
    <>
      <h1>Current signIn state</h1>
      {stateSignIn ? 'true' : 'false'}
    </>
  );
};

AuthTestPage.propTypes = {
  stateSignIn: PropTypes.bool.isRequired,
};

export default withAuthentication(AuthTestPage);

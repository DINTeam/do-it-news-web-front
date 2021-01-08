import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import LoadingSpinner from '../loadingSpinner';
import * as auth from '../../helpers/auth';

const withAuthentication = WrappedComponent => {
  const RequiresAuthentication = () => {
    useEffect(() => {
      if (!auth.getStateSignIn()) Router.push('/signInTest');
    });

    return auth.getStateSignIn() ? (
      <WrappedComponent stateSignIn={auth.getStateSignIn()} />
    ) : (
      <LoadingSpinner />
    );
  };

  return RequiresAuthentication;
};

withAuthentication.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
};

export default withAuthentication;

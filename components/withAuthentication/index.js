import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import LoadingSpinner from '../loadingSpinner';
import * as auth from '../../helpers/auth';

const withAuthentication = WrappedComponent => {
  const RequiresAuthentication = () => {
    const [stateSsrDone, setStateSsrDone] = useState(false);
    const [satteSignIn] = useState(auth.getStateSignIn());

    useEffect(() => setStateSsrDone(true), []);

    useEffect(() => {
      if (!satteSignIn) Router.push('/signin');
    }, []);

    if (!(stateSsrDone && satteSignIn)) return <LoadingSpinner />;
    return <WrappedComponent stateSignIn={satteSignIn} />;
  };

  return RequiresAuthentication;
};

withAuthentication.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
};

export default withAuthentication;

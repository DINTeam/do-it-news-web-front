import { useState } from 'react';

const useLoading = fetchCall => {
  const [stateLoading, setStateLoading] = useState(false);

  const fetchApi = async (...args) => {
    setStateLoading(true);
    const response = await fetchCall(args);
    setStateLoading(false);
    return response;
  };

  return [fetchApi, stateLoading];
};

export default useLoading;

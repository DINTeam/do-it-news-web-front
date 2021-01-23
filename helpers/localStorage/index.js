const isServer = () => typeof window === 'undefined';

export const setItem = (key, value) =>
  !isServer() && localStorage.setItem(key, value);

export const getItem = key => !isServer() && localStorage.getItem(key);

export const removeItem = key => !isServer() && localStorage.removeItem(key);

export const removeAllItem = () => !isServer() && localStorage.clear();

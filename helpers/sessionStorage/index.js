const isServer = () => typeof window === 'undefined';

export const setItem = (key, value) =>
  !isServer() && sessionStorage.setItem(key, value);

export const getItem = key => !isServer() && sessionStorage.getItem(key);

export const removeItem = key => !isServer() && sessionStorage.removeItem(key);

export const removeAllItem = () => !isServer() && sessionStorage.clear();

export const getToken = () => localStorage.getItem('token');

export const setToken = token => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');

export const getEmail = () => localStorage.getItem('email');

export const setEmail = email => localStorage.setItem('email', email);

export const removeEmail = () => localStorage.removeItem('email');

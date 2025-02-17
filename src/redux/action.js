export const setLoginStatus = (status, role = null) => ({
  type: 'SET_LOGIN_STATUS',
  payload: {
      isLoggedIn: status,
      loginTime: status ? Date.now() : null, 
role: status ? role : null,
  },
});

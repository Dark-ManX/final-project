const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getEmail = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  getEmail,
};
export default authSelectors;

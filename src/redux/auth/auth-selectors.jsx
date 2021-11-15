const getIsLoggedIn = state => state.authReducer.isLoggedIn;
const getUsername = state => state.authReducer.user.name;
const isFetchingCurrentUser = state => state.authReducer.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isFetchingCurrentUser,
};
export default authSelectors;

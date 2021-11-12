const getIsLoggedIn = state => state.authReducer.isLoggedIn;
const getUsername = state => state.authReducer.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;

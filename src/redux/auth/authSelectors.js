const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshingUser = state => state.auth.isRefreshingUser;
const selectIsLoading = state => state.auth.isLoading;
const selectErrors = state => state.auth.error;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshingUser,
  selectIsLoading,
  selectErrors,
};

export default authSelectors;

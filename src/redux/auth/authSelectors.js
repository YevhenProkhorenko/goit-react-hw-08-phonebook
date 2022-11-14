export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;
export const selectIsLoading = state => state.auth.isLoading;
export const selectErrors = state => state.auth.error;

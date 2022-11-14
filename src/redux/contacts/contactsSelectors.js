export const selectContacts = store => store.contacts.contacts;
export const selectFilter = store => store.contacts.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

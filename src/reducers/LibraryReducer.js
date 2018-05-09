import data from './LibraryList.json';

// Key point:
// No matter how many actions we dispatch throughout our application, this
// reducer will return this state, that is, the list of all libraries.
export default () => data;

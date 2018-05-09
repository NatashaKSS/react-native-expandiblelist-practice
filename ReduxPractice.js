/**
 *
 * Basic Practice with Redux again
 *
 */

 const reducer = (state = [], action) => {
 	if (action.type === 'split_string') {
     return action.payload.split('');
   } else if (action.type === 'add_character') {
     // whenever we change a state in our reducer, we must create a completely
     // new data structure and not modify the current one, as in this case:
     // state.push(action.payload); return state;
   	return [...state, action.payload];
   }
   return state;
 };
 const store = Redux.createStore(reducer);

 store.getState(); // default state

 const action = {
   type: 'split_string',
   payload: 'asdf'
 };

 store.dispatch(action);
 store.getState();

 const action2 = {
 	type: 'add_character',
   payload: 'a'
 };

 store.dispatch(action2);
 store.getState();

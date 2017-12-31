export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    case 'DO_FETCH':
      console.log('doAxios')
      return state;
    case 'FETCH_SUCCEEDED':
      console.log('nera', action.data.status);
      return action.data.status;
    default:
      return state;
  }
}

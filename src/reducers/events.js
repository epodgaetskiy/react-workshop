const initialState = {
  items: [],
  isFetching: false,
  error: false
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_EVENTS_SUCCESS':
      return {
        ...state,
        items: [...action.payload.items],
        isFetching: false
      };
    case 'GET_EVENTS_ERROR':
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default events;

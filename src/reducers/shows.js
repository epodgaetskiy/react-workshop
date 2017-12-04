const initialState = [];

const shows = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHOWS_SUCCESS':
      return state;
    default:
      return state;
  }
};

export default shows;

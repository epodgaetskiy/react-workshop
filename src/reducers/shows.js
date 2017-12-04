const initialState = [];

const shows = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHOWS_SUCCESS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default shows;

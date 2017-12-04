export const getShows = payload => dispatch => {
  return dispatch({
    type: 'GET_SHOWS_SUCCESS',
    payload
  });
};

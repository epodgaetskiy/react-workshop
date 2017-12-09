export const getEvents = dispatch => {
  return dispatch => {
    dispatch({
      type: 'GET_EVENTS_REQUEST'
    });
    fetch('https://api.gdesport.info/api/search/result?type=events')
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: 'GET_EVENTS_SUCCESS',
          payload: data
        })
      )
      .catch(() =>
        dispatch({
          type: 'GET_EVENTS_ERROR'
        })
      );
  };
};

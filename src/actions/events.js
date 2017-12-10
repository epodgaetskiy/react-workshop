// import { getOptions } from '../helpers/api';
import moment from 'moment';
import qs from 'qs';

const timeNow = encodeURIComponent(
  moment()
    .utc()
    .format()
);

export const getEvents = dispatch => {
  return dispatch => {
    dispatch({
      type: 'GET_EVENTS_REQUEST'
    });

    const params = {
      type: 'events',
      direction: 'asc',
      query: '',
      sorts: JSON.stringify({
        startAt: 'asc'
      }),
      filters: JSON.stringify({
        trainingTypes: { id: { neq: 0 } },
        location: { city: { id: { in: ['1', 18] } } },
        startAt: { gte: timeNow }
      }),
      page: 1,
      limit: 9
    };

    fetch(
      `https://api.gdesport.info/api/search/result${qs.stringify(params, {
        addQueryPrefix: true
      })}`
    )
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

import React from 'react';
import EventItem from './EventItem';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import moment from 'moment';
import qs from 'qs';

const timeNow = encodeURIComponent(
  moment()
    .utc()
    .format()
);

class EventsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isFetching: false
    };
  }

  componentDidMount() {
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
    );
  }
  render() {
    const { isFetching, events } = this.state;
    return !isFetching ? (
      <Grid container spacing={24}>
        {events.length > 0
          ? events.map(event => <EventItem key={event.id} event={event} />)
          : 'Нет событий'}
      </Grid>
    ) : (
      <CircularProgress />
    );
  }
}

export default EventsList;

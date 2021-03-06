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

class EventsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isFetching: false
    };
  }

  state = {
    events: [],
    isFetching: false
  };

  getEvents = params => {
    this.setState({
      isFetching: true
    });
    fetch(
      `https://api.gdesport.info/api/search/result${qs.stringify(params, {
        addQueryPrefix: true
      })}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isFetching: false,
          events: data.items
        });
      });
  };

  componentDidMount() {
    this.getEvents(params);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const newParams = {
        ...params,
        filters: JSON.stringify({
          trainingTypes: {
            id: nextProps.filters.type !== "0" ? nextProps.filters.type : { neq: 0 }
          },
          location: { city: { id: { in: ['1', 18] } } },
          startAt: { gte: timeNow },
        })
      };
      this.getEvents(newParams);
    }
  }
  render() {
    const { isFetching, events, name } = this.state;
    return isFetching ? (
      <CircularProgress />
    ) : (
      <Grid container spacing={24}>
        {events.length > 0
          ? events.map(event => <EventItem key={event.id} event={event} />)
          : 'Нет событий'}
      </Grid>
    );
  }
}

export default EventsList;

// addEvent = newNote => {
//   this.setState(prevState => {
//     return {
//       user: {
//         ...prevState.users,
//         name: 'evgeniy'
//       }
//     };
//   });
//
//   const newUser = { ...this.state.user };
//   newUser.name = 'evgeniy';
//   this.setState({
//     user: newUser
//   });
// };

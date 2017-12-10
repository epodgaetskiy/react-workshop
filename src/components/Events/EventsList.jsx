import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/events';
import EventItem from './EventItem';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

class EventsList extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { isFetching, events } = this.props;
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

const mapStateToProps = state => ({
  events: state.events.items,
  isFetching: state.events.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEvents
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

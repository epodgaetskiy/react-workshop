import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { getEvents } from '../../actions/events';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import moment from 'moment';
import DateIcon from 'material-ui-icons/Today';
import BookmarkBorderIcon from 'material-ui-icons/BookmarkBorder';

const styles = {
  media: {
    height: 200
  },
  title: {
    fontSize: 16,
    lineHeight: '20px',
    height: 40,
    marginBottom: 10
  },
  dateIcon: {
    width: 18,
    height: 18,
    marginRight: 2
  }
};

class EventsList extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { isFetching, events, classes } = this.props;
    return !isFetching ? (
      <Grid container spacing={24}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Grid container spacing={24}>
            {events.length > 0
              ? events.map(event => (
                  <Grid item xs={4} key={event.id}>
                    <Card>
                      <CardMedia
                        className={classes.media}
                        image={`http://api.gdesport.info${event.avatar.path}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography component="h2" className={classes.title}>
                          {event.title}
                        </Typography>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <div
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <DateIcon className={classes.dateIcon} />
                            {moment(event.startAt).format('DD.MM в hh:mm')}
                          </div>
                          <BookmarkBorderIcon />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : 'Нет событий'}
          </Grid>
        </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(EventsList)
);

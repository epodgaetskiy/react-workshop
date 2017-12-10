import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
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
  },
  bookmarkIcon: {}
};

class EventItem extends React.Component {
  render() {
    const { event, classes } = this.props;
    return (
      <Grid item xs={4}>
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <DateIcon className={classes.dateIcon} />
                {moment(event.startAt).format('DD.MM в hh:mm')}
              </div>
              <BookmarkBorderIcon className={classes.bookmarkIcon} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(EventItem);

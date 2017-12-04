import React from 'react';
import { connect } from 'react-redux';
import { getShows } from '../../actions/shows';

class ShowsList extends React.Component {
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=girls')
      .then(response => response.json())
      .then(data => this.props.getShows(data));
  }
  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = state => ({
  shows: state.shows
});

const mapPropsToDispatch = dispatch => ({
  getShows: dispatch(getShows)
});
export default connect(mapStateToProps, mapPropsToDispatch)(ShowsList);

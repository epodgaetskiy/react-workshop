import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  shows: state.shows.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getShows
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);

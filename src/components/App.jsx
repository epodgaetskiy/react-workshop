import React from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Events from '../components/Events/EventsList';
import Filters from '../components/Filters/Filters';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        query: '',
        type: 0
      }
    };
  }

  updateFilters = filters => {
    this.setState({
      filters: { ...filters }
    });
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={{ marginBottom: 24 }}>
          <Toolbar>
            <Button color="contrast">Регистрация</Button>
            <Button color="contrast">Логин</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Filters updateFilters={this.updateFilters} />
          </Grid>
          <Grid item xs={9}>
            <Events filters={this.state.filters} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

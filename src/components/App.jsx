import React from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Events from '../components/Events/EventsList';
import Filters from '../components/Filters/Filters';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Register from '../components/Auth/Register'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        query: '',
        type: 0
      },
      register: false,
    };
  }

  updateFilters = filters => {
    this.setState({
      filters: { ...filters }
    });
  };

  handleRequestClose = () => {
    this.setState({
      register: false
    });
  }

  handleRequestOpen = () => {
    this.setState({
      register: true
    });
  }

  render() {
    return (
      <div>
        <AppBar position="static" style={{ marginBottom: 24 }}>
          <Toolbar>
            <Button color="contrast" onClick={this.handleRequestOpen}>Регистрация</Button>
            <Button color="contrast">Логин</Button>
          </Toolbar>
          <Dialog
            open={this.state.register}
            onRequestClose={this.handleRequestClose}
          >
            <DialogTitle>Регистрация</DialogTitle>
            <DialogContent>
              <Register />
            </DialogContent>
          </Dialog>
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

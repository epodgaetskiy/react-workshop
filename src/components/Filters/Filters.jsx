import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = {
  textField: {},
  form: {
    marginLeft: 15,
    marginRight: 15
  },
  formControl: {
    marginTop: 15,
    width: '100%'
  }
};

class Filters extends React.Component {
  state = {
    trainingTypes: []
  };

  componentDidMount() {
    fetch('https://api.gdesport.info/api/trainingTypes?limit=0')
      .then(response => response.json())
      .then(data => {
        this.setState({
          trainingTypes: data
        });
      });
  }
  render() {
    const { classes } = this.props;
    const { trainingTypes } = this.state;
    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="direction">Выберите нарпавление</InputLabel>
          <Select input={<Input value="" name="direction" id="direction" />}>
            <MenuItem value="">
              <em>Все направления</em>
            </MenuItem>
            {trainingTypes.map(type => (
              <MenuItem value={type.id} key={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="title"
          label="Поиск по названию"
          margin="normal"
          className={classes.textField}
          fullWidth
        />
      </form>
    );
  }
}

export default withStyles(styles)(Filters);

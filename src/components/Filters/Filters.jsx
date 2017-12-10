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
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="direction">Выберите нарпавление</InputLabel>
          <Select input={<Input value="" name="direction" id="direction" />}>
            <MenuItem value="">
              <em>Все направления</em>
            </MenuItem>
            <MenuItem value={10}>Танцы</MenuItem>
            <MenuItem value={20}>Походы/туры/сборы</MenuItem>
            <MenuItem value={30}>Прочее</MenuItem>
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

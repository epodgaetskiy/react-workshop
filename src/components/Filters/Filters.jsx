import React from 'react';
// import TextField from 'material-ui/TextField';
// import { withStyles } from 'material-ui/styles';
// import Input, { InputLabel } from 'material-ui/Input';
// import { MenuItem } from 'material-ui/Menu';
// import { FormControl } from 'material-ui/Form';
// import Select from 'material-ui/Select';

// const styles = {
//   textField: {},
//   form: {
//     marginLeft: 15,
//     marginRight: 15
//   },
//   formControl: {
//     marginTop: 15,
//     width: '100%'
//   }
// };

class Filters extends React.Component {
  state = {
    trainingTypes: [],
    query: '',
    type: 0
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    const filters = {
      query: this.state.query,
      type: this.state.type
    };
    this.props.updateFilters(filters);
  };

  render() {
    const { trainingTypes, query, type } = this.state;
    return (
      <form>
        <div>
          <input
            ref={input => (this.query = input)}
            name="query"
            value={query}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <select name="type" value={type} onChange={this.handleChange}>
            <option value={0} key={0}>
              Все направления
            </option>
            {trainingTypes.map(type => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="button" onClick={this.handleClick}>
            Поиск
          </button>
        </div>
      </form>
    );
  }
}

export default Filters;

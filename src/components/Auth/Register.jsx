import React from 'react'

class Register extends React.Component {

  state = {
    firstname: 'evgeniy',
    lastname: 'podgaetskiy',
    email: 'evgeniypodgaetskiy23@gmail.com',
    plainPassword: 'podgaetskiy123',
    plainPasswordRepeat: 'podgaetskiy123',
    errors: {}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    const { firstname, lastname, plainPassword, plainPasswordRepeat, email, errors } = this.state
    if (plainPassword == plainPasswordRepeat) {
      fetch("https://api.gdesport.info/api/accounts/", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify({
            apiRegistrationForm: {
              firstname,
              lastname,
              plainPassword,
              email
            }
        }),
      })
        .then( response => response.json())
        .then( data => {
          if (data.code < 400) {
            console.log("register succes")
          } else {
            console.log(data)
          }
        })
    }
  }

  render () {
    const { firstname, lastname, plainPassword, plainPasswordRepeat, email, errors } = this.state
    return (
      <form>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="firstname">Имя</label>
          </div>
          <input id="firstname" name="firstname" value={firstname} onChange={this.handleChange}/>
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="lastname">Фамилия</label>
          </div>
          <input id="lastname" name="lastname" value={lastname} onChange={this.handleChange}/>
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input id="email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="password">Пароль</label>
          </div>
          <input id="password" name="plainPassword" value={plainPassword} onChange={this.handleChange} />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="password-repeat">Повторите пароль</label>
          </div>
          <input id="password-repeat" name="plainPasswordRepeat" value={plainPasswordRepeat} onChange={this.handleChange} />
        </div>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <button type="button" onClick={this.handleClick}>Регистрация</button>
        </div>
      </form>
    )
  }
}

export default Register;

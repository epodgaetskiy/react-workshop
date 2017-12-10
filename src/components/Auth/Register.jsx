import React from 'react'

class Register extends React.Component {

  handleClick = () => {
    fetch("https://api.gdesport.info/api/acoounts/", {
      method: "POST",
      body: JSON.stringify({
          apiRegistrationForm: {}
      }),
    })
    //params: firstname, lastname, plainPassword, email
  }

  render () {
    return (
      <form>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="firstname">Имя</label>
          </div>
          <input id="firstname" name="firstname" value="" />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="lastname">Фамилия</label>
          </div>
          <input id="lastname" name="lastname" value="" />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input id="email" name="email" value="" />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="password">Пароль</label>
          </div>
          <input id="password" name="plainPassword" value="" />
        </div>
        <div style={{ marginBottom: "15px"}}>
          <div>
            <label htmlFor="password-repeat">Повторите пароль</label>
          </div>
          <input id="password-repeat" name="plainPasswordRepeat" value="" />
        </div>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <button type="button" onClick={this.handleClick}>Регистрация</button>
        </div>
      </form>
    )
  }
}

export default Register;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {

  const [getValue, setGetValue] = useState({
    email: '',
    senha: '',
  });

  const [isClick, setIsClick] = useState(false);

  const isDesabled = () => {
    if (getValue.senha.length >= 6
      && getValue.email.includes('@')
      && getValue.email.includes('.com')) {
      return false
    } else { return true }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setGetValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(getValue));
    setIsClick(true);
  };

  return (
    <div>
      <h1 className="header-login">Login</h1>
      <form className="container-login">
        <label htmlFor="input-email" className="input-login-email">
          <input
            data-testid="email-input"
            id="input-email"
            name="email"
            type="text"
            placeholder="digite seu email"
            onChange={ handleChange }
          />
        </label>
        <label className="input-login-senha" htmlFor="input-senha">
          <input
            data-testid="password-input"
            id="input-senha"
            name="senha"
            type="password"
            placeholder="digite sua senha"
            onChange={ handleChange }
          />
        </label>
        <button
          className="button-login"
          onClick={ handleClick }
          type="button"
          disabled={ isDesabled() }
        >
          Entrar
        </button>
        { isClick && <Redirect to="/page1" /> }
      </form>
    </div>
  );
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          MY <span className="star">★</span> FIT
        </Link>
        <nav>
          <Link to="/" className="back">НАЗАД</Link>
        </nav>
      </header>

      <main className="login-content">
        <h1>Вход</h1>
        <form className="login-form">
          <label htmlFor="phone">Телефон</label>
          <input type="text" id="phone" placeholder="+7 xxx xxx xx xx" />
          <button type="submit" className="login-button">Прислать код</button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
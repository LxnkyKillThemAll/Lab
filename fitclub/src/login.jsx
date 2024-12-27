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
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault(); 
            alert('Форма успешно отправлена!');
          }}
        >
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel" 
            id="phone"
            name="phone"
            placeholder="+7 xxx xxx xx xx"
            required 
            pattern="^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$" 
            title="Введите номер телефона в формате: +7 xxx xxx xx xx" 
          />
          <button type="submit" className="login-button">Прислать код</button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;

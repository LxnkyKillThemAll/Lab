import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import img1 from "./image.jpg"

const HomePage = () => {
  return (
    <div className="app">
    {/* Header */}
    <header className="header">
    <Link to="/" className="logo">
          MY <span className="star">★</span> FIT
        </Link>
      <nav>
        <Link to="/reviews" className="active">ОТЗЫВЫ</Link>
        <Link to="/login" className="login">ВОЙТИ</Link>
      </nav>
    </header>

    {/* Main Content */}
    <main className="main-content">
      {/* Text Section */}
      <div className="text-section">
        <h1>Фитнес-клуб для тебя!</h1>
        <p>
          Наш фитнес-клуб предлагает разнообразные тренажеры, групповые занятия и
          квалифицированных тренеров. Уютная атмосфера и дополнительные услуги,
          такие как сауны и массажи, делают занятия более эффективными и приятными.
          Это отличное место для улучшения физической формы и общения с
          единомышленниками.
        </p>
        <button className="cta-button">Записаться</button>
      </div>

      <div className="content-image">
          <img
            src={img1}
            alt="Фитнес поза"
            className="image"
          />
      </div>
    </main>
      
      
    </div>
  );
};

export default HomePage;